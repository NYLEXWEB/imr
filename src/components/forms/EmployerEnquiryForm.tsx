import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { employerEnquirySchema, EmployerEnquiryFormData } from "@/lib/formValidation";
import { submitEmployerEnquiry, SubmissionResponse } from "@/lib/submissionAdapter";
import { Button } from "@/components/common/Button";

export const EmployerEnquiryForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    response?: SubmissionResponse;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployerEnquiryFormData>({
    resolver: zodResolver(employerEnquirySchema),
    defaultValues: {
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: EmployerEnquiryFormData) => {
    setSubmissionState({ status: "submitting" });
    try {
      const res = await submitEmployerEnquiry(data);
      if (res.success) {
        setSubmissionState({ status: "success", response: res });
        reset();
      } else {
        setSubmissionState({ status: "error", response: res });
      }
    } catch {
      setSubmissionState({
        status: "error",
        response: {
          success: false,
          message: "An unexpected network error occurred. Please reach our direct desk at info@imrhr.com.",
        },
      });
    }
  };

  return (
    <div className="bg-white border border-[#E5E9F0] rounded-[12px] p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6 pb-6 border-b border-[#E5E9F0]">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#17194D]">
          Submit Recruitment Requirement
        </h3>
        <p className="mt-1.5 text-sm text-[#687386]">
          Provide your organization's workforce specifications. Our recruitment
          liaison desk will review the requirements and connect with you.
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
                Enquiry Successfully Registered
              </h4>
              <p className="mt-1 text-sm text-[#687386] leading-relaxed">
                {submissionState.response?.message}
              </p>
              {submissionState.response?.referenceId && (
                <div className="mt-2.5 inline-block text-xs font-mono bg-white px-2.5 py-1 rounded border border-[#E5E9F0] text-[#17194D]">
                  Reference ID: {submissionState.response.referenceId}
                </div>
              )}
              {submissionState.response?.isSimulated && (
                <p className="mt-2 text-xs text-[#687386] italic">
                  Note: Operating in secure client integration mode. In production, this directly hooks to your enterprise email or recruitment CRM API.
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
              Submit another requirement
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
              <h4 className="font-bold text-sm">Submission Notice</h4>
              <p className="mt-1 text-xs text-red-700 leading-relaxed">
                {submissionState.response?.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Row 1: Company Name & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              placeholder="e.g. Al Hekma Contracting LLC"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.companyName
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-red-600">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contactPerson"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input
              id="contactPerson"
              type="text"
              {...register("contactPerson")}
              placeholder="e.g. Director of HR / Project Head"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.contactPerson
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.contactPerson && (
              <p className="mt-1 text-xs text-red-600">{errors.contactPerson.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Business Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="businessEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="businessEmail"
              type="email"
              {...register("businessEmail")}
              placeholder="corporate@company.com"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.businessEmail
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.businessEmail && (
              <p className="mt-1 text-xs text-red-600">{errors.businessEmail.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber")}
              placeholder="+971 50 123 4567"
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
        </div>

        {/* Row 3: Industry & Destination Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="industry"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Industry Sector <span className="text-red-500">*</span>
            </label>
            <select
              id="industry"
              {...register("industry")}
              defaultValue=""
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm bg-white transition-colors focus:outline-none focus:ring-1 ${
                errors.industry
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            >
              <option value="" disabled>
                Select industry
              </option>
              <option value="Healthcare & Medical">Healthcare & Medical</option>
              <option value="Construction & Hospitality">Construction & Hospitality</option>
              <option value="Oil & Gas / Energy Projects">Oil & Gas / Energy Projects</option>
              <option value="Production & Transportation">Production & Transportation</option>
              <option value="Education & Academics">Education & Academics</option>
              <option value="Skilled & Professional Trades">Skilled & Professional Trades</option>
              <option value="Other Industry">Other Industry</option>
            </select>
            {errors.industry && (
              <p className="mt-1 text-xs text-red-600">{errors.industry.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="destinationCountry"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Deployment Destination <span className="text-red-500">*</span>
            </label>
            <input
              id="destinationCountry"
              type="text"
              {...register("destinationCountry")}
              placeholder="e.g. UAE, Qatar, Poland, Kuwait, Ireland"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.destinationCountry
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.destinationCountry && (
              <p className="mt-1 text-xs text-red-600">{errors.destinationCountry.message}</p>
            )}
          </div>
        </div>

        {/* Row 4: Job Position & Number of Vacancies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="jobPosition"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Required Position / Roles <span className="text-red-500">*</span>
            </label>
            <input
              id="jobPosition"
              type="text"
              {...register("jobPosition")}
              placeholder="e.g. Staff Nurses, 6G Welders, Civil Engineers"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.jobPosition
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.jobPosition && (
              <p className="mt-1 text-xs text-red-600">{errors.jobPosition.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="vacanciesCount"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Number of Vacancies <span className="text-red-500">*</span>
            </label>
            <input
              id="vacanciesCount"
              type="text"
              {...register("vacanciesCount")}
              placeholder="e.g. 5, 20, 50+"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.vacanciesCount
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.vacanciesCount && (
              <p className="mt-1 text-xs text-red-600">{errors.vacanciesCount.message}</p>
            )}
          </div>
        </div>

        {/* Required Qualifications */}
        <div>
          <label
            htmlFor="requiredQualifications"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
          >
            Required Qualifications & Experience <span className="text-red-500">*</span>
          </label>
          <textarea
            id="requiredQualifications"
            rows={3}
            {...register("requiredQualifications")}
            placeholder="Specify certifications, years of experience, degree, or technical licensing requirements..."
            className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
              errors.requiredQualifications
                ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
            }`}
          />
          {errors.requiredQualifications && (
            <p className="mt-1 text-xs text-red-600">
              {errors.requiredQualifications.message}
            </p>
          )}
        </div>

        {/* Additional Requirements */}
        <div>
          <label
            htmlFor="additionalRequirements"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
          >
            Additional Project Details / Demand Letter Information (Optional)
          </label>
          <textarea
            id="additionalRequirements"
            rows={2}
            {...register("additionalRequirements")}
            placeholder="Salary scales, accommodation provisions, mobilization timeline targets..."
            className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#E5E9F0] text-sm transition-colors focus:outline-none focus:border-[#4B91CC] focus:ring-1 focus:ring-[#4B91CC]"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("privacyConsent")}
              className="mt-1 rounded border-gray-300 text-[#17194D] focus:ring-[#4B91CC] shrink-0"
            />
            <span className="text-xs text-[#687386] leading-relaxed">
              I consent to Indian Manpower Resource processing this company
              recruitment enquiry in accordance with the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-[#4B91CC] underline hover:text-[#17194D]"
              >
                Privacy Policy
              </a>
              . Information will be utilized strictly for workforce sourcing
              liaison.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1 text-xs text-red-600">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
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
              ? "Registering Requirement..."
              : "Submit Recruitment Enquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
};
