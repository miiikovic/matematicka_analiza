import '@styles/globals.css';

export const metadata = {
    title: "Matematicka Analiza",
    description: "Privatni casovi matematike"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className="gradient" />
            </div>

            <div className="app">
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout