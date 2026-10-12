import { employerEnquirySchema, candidateEnquirySchema, contactFormSchema } from '../src/lib/formValidation.ts';

console.log('Testing Zod Form Validation Schemas...');

// 1. Employer schema invalid test
const invalidEmployer = employerEnquirySchema.safeParse({});
console.log('[TEST 1] Empty Employer Form valid?', invalidEmployer.success);
if (!invalidEmployer.success) {
  console.log('Expected errors caught:', Object.keys(invalidEmployer.error.flatten().fieldErrors).length, 'fields');
}

// 2. Employer schema valid test
const validEmployer = employerEnquirySchema.safeParse({
  companyName: 'Timbertech LLC',
  contactPerson: 'Faisal Al-Mansoor',
  businessEmail: 'faisal@timbertech.ae',
  phoneNumber: '+971 50 123 4567',
  industry: 'Construction & Hospitality',
  jobPosition: 'Site Civil Engineers',
  vacanciesCount: '15',
  destinationCountry: 'United Arab Emirates',
  requiredQualifications: 'B.Tech in Civil Engineering with 5+ years GCC experience',
  privacyConsent: true,
});
console.log('[TEST 2] Valid Employer Form valid?', validEmployer.success);

// 3. Contact schema test
const validContact = contactFormSchema.safeParse({
  name: 'David O\'Connor',
  email: 'david@corporate.ie',
  phoneNumber: '+353 874896695',
  subject: 'European Manpower Collaboration',
  message: 'We are seeking to discuss recruitment requirements for European operations.',
  privacyConsent: true,
});
console.log('[TEST 3] Valid Contact Form valid?', validContact.success);

if (!invalidEmployer.success && validEmployer.success && validContact.success) {
  console.log('\nALL FORM VALIDATION LOGIC VERIFIED SUCCESSFULLY!');
} else {
  console.error('\nFORM VALIDATION TEST FAILED.');
}
