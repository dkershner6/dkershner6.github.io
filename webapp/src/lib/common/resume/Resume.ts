import { JsonResume } from './JsonResume';

export default interface Resume {
    updatedAt: string;
    slug: string;
    coverLetter: string[]; // Paragraphs
    resume: JsonResume;
}
