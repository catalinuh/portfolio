//import css in order
import 'normalize.css'
import '../animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../img/icons/css/ionicons.css'
import '../img/font-awesome/css/font-awesome.css'
import 'lightbox2/dist/css/lightbox.min.css'
import '../style.css'

export const metadata = {
  title: 'Catalina McQuade',
  description:
    "Catalina McQuade's Portfolio Website migrated from CRA to Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Catalina McQuade</title>
      </head>
      <body id="page-top">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
