import { routes } from "../../utilities/routes";

export const registerNavs=[
    {title: 'Personal Information', url: routes.personalInfo()},
    {title: 'Academic Details', url: routes.academics()},
    {title: 'Preferences', url: routes.preferences()},
    {title: 'Learning Goals', url: routes.goals()},
    {title: 'Terms & Conditions', url: routes.terms()}

]

export const tutorNavs=[
    {title: 'Personal Information', url: routes.tutorPersonalInfo()},
    {title: 'Educational Experience', url: routes.tutorAcademics()},
    {title: 'Teaching Style & Approach', url: routes.style()},
    {title: 'Availability & Preferences', url: routes.tutorPreferences()},
    {title: 'Upload Documents', url: routes.upload()},
    {title: 'Terms & Conditions', url: routes.terms()}

]