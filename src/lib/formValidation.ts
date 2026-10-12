import { z } from "zod";

// Phone validation regex allowing international prefixes
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;

export const employerEnquirySchema = z.object({
  companyName: z.string().min(2, "Company name is required (minimum 2 characters)"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  businessEmail: z.string().email("Please provide a valid corporate email address"),
  phoneNumber: z.string().regex(phoneRegex, "Please enter a valid international phone number"),
  industry: z.string().min(1, "Please select the relevant industry"),
  jobPosition: z.string().min(2, "Please state the job title or position required"),
  vacanciesCount: z.string().min(1, "Please indicate estimated number of vacancies"),
  destinationCountry: z.string().min(2, "Please specify deployment destination country"),
  requiredQualifications: z.string().min(5, "Please describe the qualifications and certifications required"),
  additionalRequirements: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy to submit an enquiry",
  }),
});

export type EmployerEnquiryFormData = z.infer<typeof employerEnquirySchema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const candidateEnquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required (minimum 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().regex(phoneRegex, "Please enter a valid phone number with country code"),
  preferredIndustry: z.string().min(1, "Please select your target industry"),
  preferredCountry: z.string().min(2, "Please indicate preferred destination country"),
  qualification: z.string().min(2, "Please enter your highest qualification/degree"),
  yearsOfExperience: z.string().min(1, "Please specify your years of relevant experience"),
  currentRole: z.string().min(2, "Please specify your current or most recent job title"),
  resume: z
    .custom<FileList | File | null>()
    .refine((file) => {
      if (!file) return false;
      if (file instanceof FileList) return file.length > 0;
      return file instanceof File;
    }, "Please upload your resume (PDF or DOC format)")
    .refine((file) => {
      let actualFile: File | null = null;
      if (file instanceof FileList && file.length > 0) actualFile = file[0];
      else if (file instanceof File) actualFile = file;
      if (!actualFile) return false;
      return actualFile.size <= MAX_FILE_SIZE;
    }, "Resume file size must not exceed 5MB")
    .refine((file) => {
      let actualFile: File | null = null;
      if (file instanceof FileList && file.length > 0) actualFile = file[0];
      else if (file instanceof File) actualFile = file;
      if (!actualFile) return false;
      return ACCEPTED_FILE_TYPES.includes(actualFile.type) || actualFile.name.endsWith(".pdf") || actualFile.name.endsWith(".doc") || actualFile.name.endsWith(".docx");
    }, "Only PDF or DOC/DOCX files are supported"),
  additionalMessage: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy to submit your candidate profile",
  }),
});

export type CandidateEnquiryFormData = z.infer<typeof candidateEnquirySchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  email: z.string().email("Please provide a valid email address"),
  phoneNumber: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  subject: z.string().min(3, "Please provide an enquiry subject"),
  message: z.string().min(10, "Message must contain at least 10 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to our privacy terms",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
