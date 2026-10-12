import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/formValidation";
import { submitContactEnquiry, SubmissionResponse } from "@/lib/submissionAdapter";
import { Button } from "@/components/common/Button";

export const ContactForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    response?: SubmissionResponse;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ status: "submitting" });
    try {
      const res = await submitContactEnquiry(data);
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
          message: "Unable to submit message. Please write to info@imrhr.com directly.",
        },
      });
    }
  };

  return (
    <div className="bg-white border border-[#E5E9F0] rounded-[12px] p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6 pb-6 border-b border-[#E5E9F0]">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#17194D]">
          Send Us a Direct Message
        </h3>
        <p className="mt-1.5 text-sm text-[#687386]">
          Have a question regarding recruitment operations or overseas manpower
          enquiries? Complete the form below to connect with our team.
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
                Message Received
              </h4>
              <p className="mt-1 text-sm text-[#687386] leading-relaxed">
                {submissionState.response?.message}
              </p>
              {submissionState.response?.referenceId && (
                <div className="mt-2.5 inline-block text-xs font-mono bg-white px-2.5 py-1 rounded border border-[#E5E9F0] text-[#17194D]">
                  Message Reference: {submissionState.response.referenceId}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E5E9F0]/60">
            <button
              type="button"
              onClick={() => setSubmissionState({ status: "idle" })}
              className="text-xs font-semibold text-[#4B91CC] hover:underline"
            >
              Send another message
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
              <h4 className="font-bold text-sm">Transmission Error</h4>
              <p className="mt-1 text-xs text-red-700 leading-relaxed">
                {submissionState.response?.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contactName"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contactName"
              type="text"
              {...register("name")}
              placeholder="e.g. John Doe"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.name
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="contactEmail"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
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

        {/* Phone & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contactPhone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="contactPhone"
              type="tel"
              {...register("phoneNumber")}
              placeholder="+91 93887 70039"
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
              htmlFor="contactSubject"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="contactSubject"
              type="text"
              {...register("subject")}
              placeholder="e.g. Manpower Enquiry / Collaboration"
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
                errors.subject
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                  : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contactMessage"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-1.5"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contactMessage"
            rows={4}
            {...register("message")}
            placeholder="Please detail your enquiry or recruitment requirements..."
            className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm transition-colors focus:outline-none focus:ring-1 ${
              errors.message
                ? "border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                : "border-[#E5E9F0] focus:border-[#4B91CC] focus:ring-[#4B91CC]"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
          )}
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
              I agree to the processing of my contact information in accordance
              with the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-[#4B91CC] underline hover:text-[#17194D]"
              >
                Privacy Policy
              </a>
              .
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
            className="w-full sm:w-auto min-w-[180px]"
            disabled={submissionState.status === "submitting"}
            icon={
              submissionState.status === "submitting" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : undefined
            }
          >
            {submissionState.status === "submitting"
              ? "Transmitting Message..."
              : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};
