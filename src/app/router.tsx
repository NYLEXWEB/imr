import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

// Direct page imports for reliable bundling & instant transitions
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import OurStoryPage from "@/pages/OurStoryPage";
import ServicesPage from "@/pages/ServicesPage";
import MedicalRecruitmentPage from "@/pages/MedicalRecruitmentPage";
import ConstructionHospitalityPage from "@/pages/ConstructionHospitalityPage";
import OilGasPage from "@/pages/OilGasPage";
import EducationRecruitmentPage from "@/pages/EducationRecruitmentPage";
import ProductionTransportationPage from "@/pages/ProductionTransportationPage";
import IndustriesPage from "@/pages/IndustriesPage";
import RecruitmentProcessPage from "@/pages/RecruitmentProcessPage";
import EmployersPage from "@/pages/EmployersPage";
import JobSeekersPage from "@/pages/JobSeekersPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "about/our-story",
        element: <OurStoryPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/medical-recruitment",
        element: <MedicalRecruitmentPage />,
      },
      {
        path: "services/construction-hospitality",
        element: <ConstructionHospitalityPage />,
      },
      {
        path: "services/oil-gas",
        element: <OilGasPage />,
      },
      {
        path: "services/education",
        element: <EducationRecruitmentPage />,
      },
      {
        path: "services/production-transportation",
        element: <ProductionTransportationPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "recruitment-process",
        element: <RecruitmentProcessPage />,
      },
      {
        path: "employers",
        element: <EmployersPage />,
      },
      {
        path: "job-seekers",
        element: <JobSeekersPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "404",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
