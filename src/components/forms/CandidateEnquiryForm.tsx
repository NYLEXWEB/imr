import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2, UploadCloud, FileText } from "lucide-react";
import { candidateEnquirySchema, CandidateEnquiryFormData } from "@/lib/formValidation";
import { submitCandidateEnquiry, SubmissionResponse } from "@/lib/submissionAdapter";
import { Button } from "@/components/common/Button";

export const CandidateEnquiryForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    response?: SubmissionResponse;
  }>({ status: "idle" });

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CandidateEnquiryFormData>({
    resolver: zodResolver(candidateEnquirySchema),
    defaultValues: {
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: CandidateEnquiryFormData) => {
    setSubmissionState({ status: "submitting" });
    try {
      const res = await submitCandidateEnquiry(data);
      if (res.success) {
        setSubmissionState({ status: "success", response: res });
        reset();
        setSelectedFileName(null);
      } else {
        setSubmissionState({ status: "error", response: res });
      }
    } catch {
      setSubmissionState({
        status: "error",
        response: {
          success: false,
          message: "Unable to process candidate submission. Please email your CV directly to info@imrhr.com.",
        },
      });
    }
  };

  const resumeRegistration = register("resume");

  return (
    <div className="bg-white border border-[#E5E9F0] rounded-[12px] p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6 pb-6 border-b border-[#E5E9F0]">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#17194D]">
          Register Candidate Profile & CV
        </h3>
        <p className="mt-1.5 text-sm text-[#687386]">
          Submit your career details and resume. Our recruitment coordinators review
          qualifications against current and upcoming overseas requirements.
        </p>
      </div>

      {submissionState.status === "success" && (
        <div
          className="mb-8 p-5 bg-[#F0F1F8] border border-[#CBD5E1] rounded-[8px] text-[#17194D]"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#4B91CC] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading font-bold text-base text-[#17194D]">
                Application Received
              </h4>
              <p className="mt-1 text-sm text-[#687386] leading-relaxed">
                {submissionState.response?.message}
              </p>
              {submissionState.response?.referenceId && (
                <div className="mt-2.5 inline-block text-xs font-mono bg-white px-2.5 py-1 rounded border border-[#E5E9F0] text-[#17194D]">
                  Application Reference: {submissionState.response.referenceId}
                </div>
              )}
              {submissionState.response?.isSimulated && (
                <p className="mt-2 text-xs text-[#687386] italic">
                  Note: Operating in client integration architecture. In live production, resumes are streamed to secure enterprise cloud storage.
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E5E9F0]/60">
            <button
              type="button"
              onClick={() => setSubmissionState({ status: "idle" })}
              className="text-xs font-semibold text-[#4B91CC] hover:underline"
            >
              Submit another profile
            </button>
          </div>
        </div>
      )}

      {submissionState.status === "error" && (
        <div
          className="mb-8 p-4 bg-red-50 border border-red-200 rounded-[8px] text-red-800"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">Submission Status</h4>
              <p className="mt-1 text-xs text-red-700 leading-relaxed">
                {submissionState.response?.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Full Legal Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.fullName
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="rahul.sharma@example.com"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.email
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone & Current Role */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="canPhone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Phone / Mobile (with country code) <span className="text-red-500">*</span>
            </label>
            <input
              id="canPhone"
              type="tel"
              {...register("phoneNumber")}
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.phoneNumber
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="currentRole"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Current Job Title / Profession <span className="text-red-500">*</span>
            </label>
            <input
              id="currentRole"
              type="text"
              {...register("currentRole")}
              placeholder="e.g. ICU Staff Nurse, Pipe Fitter, Chef"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.currentRole
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.currentRole && (
              <p className="mt-1 text-xs text-red-600">{errors.currentRole.message}</p>
            )}
          </div>
        </div>

        {/* Industry & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="preferredIndustry"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Preferred Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="preferredIndustry"
              {...register("preferredIndustry")}
              defaultValue=""
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm bg-white transition-colors focus:outline-none focus:ring-1 ${
                errors.preferredIndustry
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            >
              <option value="" disabled>
                Select industry
              </option>
              <option value="Healthcare & Nursing">Healthcare & Nursing</option>
              <option value="Construction & Hospitality">Construction & Hospitality</option>
              <option value="Oil & Gas / Industrial">Oil & Gas / Industrial</option>
              <option value="Production & Transportation">Production & Transportation</option>
              <option value="Education & Academics">Education & Academics</option>
              <option value="Other Technical Trades">Other Technical Trades</option>
            </select>
            {errors.preferredIndustry && (
              <p className="mt-1 text-xs text-red-600">{errors.preferredIndustry.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredCountry"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Preferred Destination Country <span className="text-red-500">*</span>
            </label>
            <input
              id="preferredCountry"
              type="text"
              {...register("preferredCountry")}
              placeholder="e.g. UAE, Bahrain, Poland, Ireland, UK"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.preferredCountry
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.preferredCountry && (
              <p className="mt-1 text-xs text-red-600">{errors.preferredCountry.message}</p>
            )}
          </div>
        </div>

        {/* Qualification & Years Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="qualification"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Highest Educational Qualification <span className="text-red-500">*</span>
            </label>
            <input
              id="qualification"
              type="text"
              {...register("qualification")}
              placeholder="e.g. B.Sc Nursing, Diploma in Mechanical Engg, ITI"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.qualification
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.qualification && (
              <p className="mt-1 text-xs text-red-600">{errors.qualification.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="yearsOfExperience"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Total Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              id="yearsOfExperience"
              type="text"
              {...register("yearsOfExperience")}
              placeholder="e.g. 3 years, 5+ years"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.yearsOfExperience
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.yearsOfExperience && (
              <p className="mt-1 text-xs text-red-600">{errors.yearsOfExperience.message}</p>
            )}
          </div>
        </div>

        {/* Resume File Upload */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5">
            Upload Resume / Curriculum Vitae <span className="text-red-500">*</span>
          </label>
          <div
            className={`border-2 border-dashed rounded-[8px] p-6 text-center cursor-pointer transition-colors ${
              errors.resume
                ? "border-red-300 bg-red-50/20"
                : "border-[#CBD5E1] hover:border-[#4B91CC] bg-[#F5F7FA]"
            }`}
          >
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword"
              className="hidden"
              {...resumeRegistration}
              onChange={(e) => {
                resumeRegistration.onChange(e);
                if (e.target.files && e.target.files.length > 0) {
                  setSelectedFileName(e.target.files[0].name);
                } else {
                  setSelectedFileName(null);
                }
              }}
            />
            <label htmlFor="resume" className="cursor-pointer block">
              <div className="w-10 h-10 mx-auto rounded-full bg-white shadow-xs flex items-center justify-center text-[#4B91CC] mb-2">
                {selectedFileName ? (
                  <FileText className="w-5 h-5 text-[#17194D]" />
                ) : (
                  <UploadCloud className="w-5 h-5" />
                )}
              </div>
              {selectedFileName ? (
                <div className="text-sm font-medium text-[#17194D]">
                  Selected: <span className="underline">{selectedFileName}</span>
                </div>
              ) : (
                <>
                  <div className="text-sm font-medium text-[#17194D]">
                    Click to browse and upload your CV
                  </div>
                  <div className="text-xs text-[#687386] mt-1">
                    PDF, DOC, or DOCX formats accepted (Maximum 5MB)
                  </div>
                </>
              )}
            </label>
          </div>
          {errors.resume && (
            <p className="mt-1 text-xs text-red-600">{errors.resume.message as string}</p>
          )}
        </div>

        {/* Additional Message */}
        <div>
          <label
            htmlFor="additionalMessage"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
          >
            Additional Details / Notes (Optional)
          </label>
          <textarea
            id="additionalMessage"
            rows={3}
            {...register("additionalMessage")}
            placeholder="Mention your passport readiness, notice period, or specific career goals..."
            className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E9F0] text-sm transition-colors focus:outline-none focus:border-[#4B91CC] focus:ring-1 focus:ring-[#4B91CC]"
          />
        </div>

        {/* Privacy Consent */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("privacyConsent")}
              className="mt-1 rounded border-gray-300 text-[#17194D] focus:ring-[#4B91CC] shrink-0"
            />
            <span className="text-xs text-[#687386] leading-relaxed">
              I consent to Indian Manpower Resource reviewing and storing my
              curriculum vitae for recruitment opportunities in accordance with
              the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-[#4B91CC] underline hover:text-[#17194D]"
              >
                Privacy Policy
              </a>
              . I understand submission does not constitute a guarantee of job
              placement or visa issuance.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1 text-xs text-red-600">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            disabled={submissionState.status === "submitting"}
            icon={
              submissionState.status === "submitting" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : undefined
            }
          >
            {submissionState.status === "submitting"
              ? "Submitting Profile..."
              : "Submit Candidate Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
};
