import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Master Administrator | M CRM",
  description: "Master Administrator Dashboard for M CRM",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      data-layout="default"
      data-bs-theme="light"
      data-sidebar="light"
      data-topbar="white"
      data-color="primary"
    >
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-icon.png" />

        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/plugins/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" href="/assets/plugins/datatables/css/dataTables.bootstrap5.min.css" />
        <link rel="stylesheet" href="/assets/plugins/choices.js/public/assets/styles/choices.min.css" />
        <link rel="stylesheet" href="/assets/plugins/select2/css/select2.min.css" />
        <link rel="stylesheet" href="/assets/plugins/quill/quill.snow.css" />
        <link rel="stylesheet" href="/assets/plugins/intltelinput/css/intlTelInput.css" />
        <link rel="stylesheet" href="/assets/plugins/flatpickr/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/plugins/tabler-icons/tabler-icons.min.css" />
        <link rel="stylesheet" href="/assets/plugins/simplebar/simplebar.min.css" />
        <link rel="stylesheet" href="/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.css" />
        <link rel="stylesheet" href="/assets/css/style.css" id="app-style" />
      </head>

      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}

        {/* Theme Config Js - Must load before other scripts */}
        <Script src="/assets/js/theme-script.js" strategy="beforeInteractive" />

        {/* jQuery */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* Bootstrap Core JS */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

        {/* Moment JS */}
        <Script src="/assets/js/moment.min.js" strategy="beforeInteractive" />

        {/* Theia Sticky Sidebar JS */}
        <Script src="/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.min.js" strategy="beforeInteractive" />

        {/* Daterangepicker JS */}
        <Script src="/assets/plugins/daterangepicker/daterangepicker.js" strategy="lazyOnload" />

        {/* Select2 JS */}
        <Script src="/assets/plugins/select2/js/select2.min.js" strategy="lazyOnload" />

        {/* Datatable JS */}
        <Script src="/assets/plugins/datatables/js/jquery.dataTables.min.js" strategy="lazyOnload" />
        <Script src="/assets/plugins/datatables/js/dataTables.bootstrap5.min.js" strategy="lazyOnload" />

        {/* Mobile Input */}
        <Script src="/assets/plugins/intltelinput/js/intlTelInput.js" strategy="lazyOnload" />

        {/* Simplebar JS */}
        <Script src="/assets/plugins/simplebar/simplebar.min.js" strategy="lazyOnload" />

        {/* Quill JS */}
        <Script src="/assets/plugins/quill/quill.min.js" strategy="lazyOnload" />

        {/* Choices JS */}
        <Script src="/assets/plugins/choices.js/public/assets/scripts/choices.min.js" strategy="lazyOnload" />

        {/* Flatpickr JS */}
        <Script src="/assets/plugins/flatpickr/flatpickr.min.js" strategy="lazyOnload" />

        {/* Main JS */}
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}