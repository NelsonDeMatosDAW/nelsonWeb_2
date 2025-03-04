import { Nunito } from 'next/font/google'
import '/public/css/animate.css'
import "/public/css/bootstrap.css"
import '/public/css/font-awesome.css'
import "/public/css/responsive.css"
import '/public/css/scrollbar.css'
import '/public/css/simple-line-icons.css'
import '/public/css/smooth-scrollbar.css'
import "/public/css/style.css"


const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--nunito-font-family",
    display: 'swap',
})
export const metadata = {
    title: {
        template: 'Vosio | %s',
        // content:'text/html',
        default: 'Vosio | React NextJs', // a default is required when creating a template
    },
    name: "Portfolio Personal Nelson de Matos",
    content: "Portfolio Personal Full Stack Developer",
    openGraph: {
        title: 'Portfolio Personal Nelson de Matos',
        description: 'Portfolio Personal Full Stack Developer'
    }
}
export const viewport = {
    author: [{ name: 'NelsonDeMatosDev' }, { name: 'NelsonDeMatos', url: 'https://nelsondematosdesginer.es' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    httpEquiv: 'Content-Type',
    charset: 'utf-8'
}


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${nunito.variable}`}>{children}</body>
        </html>
    )
}
