import { Dashboard } from "../components/dashboard"

export const routes={
    login() { 
        return '/login'
    },
    // signUp(){
    //     return '/signUp'
    // },
    personalInfo(){
        return '/studentSignUp/personalInfo'
    },
    academics(){
        return '/studentSignUp/academics'
    },
    preferences(){
        return '/studentSignUp/preferences'
    },
    goals(){
        return '/studentSignUp/goals'
    },
    terms(){
        return '/studentSignUp/terms'
    },
    confirmEmail(){
        return '/studentSignUp/confirmEmail'
    },
    emailConfirmed(){
        return '/studentSignUp/emailConfirmed'
    },
    tutorPersonalInfo(){
        return '/tutorSignUp/personalInfo'
    },
    tutorAcademics(){
        return '/tutorSignUp/academics'
    },
    tutorPreferences(){
        return '/tutorSignUp/preferences'
    },
    tutorGoals(){
        return '/tutorSignUp/goals'
    },
    tutorTerms(){
        return '/tutorSignUp/terms'
    },
    tutorConfirmEmail(){
        return '/tutorSignUp/confirmEmail'
    },
    tutorEmailConfirmed(){
        return '/tutorSignUp/emailConfirmed'
    },
    style(){
        return '/tutorSignUp/teachingStyles'
    },
    upload(){
        return '/tutorSignUp/uploadDocuments'
    },
    dashboard(){
        return '/dashboard'
    },
    overview(){
        return '/dashboard/overview'
    },
    progress(){
        return '/dashboard/progress'
    },
    notification(){
        return '/dashboard/notification'
    },
    refer(){
        return '/refer'
    },
    classes(){
        return '/classes/schedule'
    },
    upcoming(){
        return '/classes/upcomingClasses'
    },
    reschedule(){
        return '/classes/reschedule'
    },
    feedback(){
        return '/feedback'
    },
    profileSettings(){
        return '/settings/profileSettings'
    },
    loginSettings(){
        return '/settings/loginSettings'
    },
    summary(){
        return '/settings/summary'
    },
    assignmentDashboard(){
        return '/assignments'
    },
    submitAssignment(){
        return '/assignments/submit'
    },
    tutorDashboard(){
        return '/tutors'
    },
    manageTutor(){
        return '/tutors/manageTutors'
    },
    messageDashboard(){
        return '/messages'
    },
    addDashboard(){
        return '/classes/add'
    },
    paymentDashboard(){
        return '/add/payment'
    },
    class(){
        return '/class'
    }
}
