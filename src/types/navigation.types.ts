export type ISectionId =
    | "hero"
    | "about"
    | "services"
    | "testimonials"
    | "faq"
    | "contact";

export interface ISection {
    id: ISectionId;
    label: string;
}