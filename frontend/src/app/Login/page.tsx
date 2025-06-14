import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Log In | TutorsDial',
  description: 'Securely access your TutorsDial account to manage your dashboard, settings, and preferences.',
  metadataBase: new URL('https://www.tutorsdial.com'),
  alternates: {
    canonical: '/login',
    languages: {
      'en-US': '/login',
      'es-ES': '/es/iniciar-sesión',
    },
  },
  openGraph: {
    title: 'Log In to TutorsDial',
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
    title: 'Log In to TutorsDial',
    description: 'Securely access your TutorsDial dashboard and settings.',
    images: ['https://www.tutorsdial.com/login-page.png'],
  },
};
function Login() {
  return (
    <div>
      
    </div>
  )
}

export default Login
