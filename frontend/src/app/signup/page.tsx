import AuthScreen from '@/components/common/authScreen';
import AuthForm from '@/components/login/loginForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sign Up | TutorsDial',
  description: 'Securely access your TutorsDial account to manage your dashboard, settings, and preferences.',
  metadataBase: new URL('https://www.tutorsdial.com'),
  alternates: {
    canonical: '/signup',
    languages: {
      'en-US': '/signup',
      'es-ES': '/es/iniciar-sesión',
    },
  },
  openGraph: {
    title: 'Sign Up to TutorsDial',
    description: 'Access your TutorsDial dashboard, settings, and preferences securely.',
    url: 'https://www.tutorsdial.com/login',
    siteName: 'TutorsDial',
    type: 'website',
    images: [
      {
        url: 'https://www.tutorsdial.com/login-page.png',
        width: 1200,
        height: 630,
        alt: 'TutorsDial login screen',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign up to TutorsDial',
    description: 'Securely access your TutorsDial dashboard and settings.',
    images: ['https://www.tutorsdial.com/login-page.png'],
  },
};
function Login() {
  return (
    <div className=''>
      <AuthScreen><AuthForm/></AuthScreen>
      
    </div>
  )
}

export default Login
