/**
 * Form Submission Adapter for Indian Manpower Resource
 * 
 * ARCHITECTURAL SPECIFICATION:
 * In a static / client-side environment without a configured production backend:
 * 1. Client-side input validation is enforced via Zod schemas.
 * 2. Sensitive candidate information (such as resumes) is NOT cached in LocalStorage or insecure storages.
 * 3. The adapter processes the payload and returns an explicit, truthful response.
 * 4. In development / mock mode, it simulates network transit and advises the operator
 *    how to plug in an authenticated endpoint (e.g. AWS SES, Resend, or corporate recruitment API).
 */

export interface SubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  isSimulated?: boolean;
}

export interface FormSubmissionConfig {
  backendEndpoint?: string;
  environment: "development" | "production";
}

export const submissionConfig: FormSubmissionConfig = {
  // In production, configure an authorized API Gateway or serverless endpoint
  backendEndpoint: import.meta.env.VITE_RECRUITMENT_API_URL || "",
  environment: (import.meta.env.MODE as "development" | "production") || "development",
};

export async function submitEmployerEnquiry(
  data: Record<string, unknown>
): Promise<SubmissionResponse> {
  // Simulate network latency for realistic UX state testing
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (submissionConfig.backendEndpoint) {
    try {
      const res = await fetch(`${submissionConfig.backendEndpoint}/api/employer-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      return {
        success: true,
        message: "Your recruitment requirement has been registered. Our corporate liaison desk will review your specifications.",
        referenceId: json.referenceId,
      };
    } catch {
      return {
        success: false,
        message: "Unable to establish contact with the recruitment gateway. Please reach our direct line at info@imrhr.com.",
      };
    }
  }

  // Truthful mock handling when no live API gateway is configured
  const mockRef = `IMR-EMP-${Date.now().toString().slice(-6)}`;
  return {
    success: true,
    isSimulated: true,
    referenceId: mockRef,
    message: `Enquiry validated for ${data.companyName as string}. (Frontend demo mode: Live backend endpoint not configured. Ready for secure API integration).`,
  };
}

export async function submitCandidateEnquiry(
  data: Record<string, unknown>
): Promise<SubmissionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1400));

  if (submissionConfig.backendEndpoint) {
    try {
      // For resumes, multipart/form-data should be used
      const formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (key === "resume" && val instanceof FileList && val.length > 0) {
          formData.append("resume", val[0]);
        } else if (key === "resume" && val instanceof File) {
          formData.append("resume", val);
        } else {
          formData.append(key, String(val ?? ""));
        }
      });

      const res = await fetch(`${submissionConfig.backendEndpoint}/api/candidate-enquiry`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      return {
        success: true,
        message: "Candidate dossier received successfully.",
        referenceId: json.referenceId,
      };
    } catch {
      return {
        success: false,
        message: "Submission failed to transmit to server. Please email your CV directly to info@imrhr.com.",
      };
    }
  }

  const mockRef = `IMR-CAN-${Date.now().toString().slice(-6)}`;
  return {
    success: true,
    isSimulated: true,
    referenceId: mockRef,
    message: `Candidate application validated for ${data.fullName as string}. (Frontend demo mode: File uploaded in memory only; configure VITE_RECRUITMENT_API_URL for production cloud storage).`,
  };
}

export async function submitContactEnquiry(
  data: Record<string, unknown>
): Promise<SubmissionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (submissionConfig.backendEndpoint) {
    try {
      const res = await fetch(`${submissionConfig.backendEndpoint}/api/contact-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      return {
        success: true,
        message: "Your message has been delivered to our administrative team.",
        referenceId: json.referenceId,
      };
    } catch {
      return {
        success: false,
        message: "Message delivery failed. Please send an email directly to info@imrhr.com.",
      };
    }
  }

  const mockRef = `IMR-MSG-${Date.now().toString().slice(-6)}`;
  return {
    success: true,
    isSimulated: true,
    referenceId: mockRef,
    message: `Contact enquiry received from ${data.name as string}. (Frontend demo mode: verified and ready for backend hookup).`,
  };
}
