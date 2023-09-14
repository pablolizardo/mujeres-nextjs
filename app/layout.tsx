import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import './globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-36MD6VKR3K"
                ></script>
                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-36MD6VKR3K');`,
                    }}
                />
            </head>
            <body className="m-0 bg-white">
                <Header />
                <div className="grid gap-10 max-w-[1480px] mx-auto p-5">
                    <main>{children}</main>
                    {/* <Sidebar /> */}
                    <Footer />
                </div>
            </body>
        </html>
    )
}