
const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-100 h-80">
        <footer className="space-y-10">
          <div className="flex justify-center items-center space-x-3">
            <a href="https://www.facebook.com/Cognilium" target="_blank">
              <i className="lab la-facebook-f text-2xl text-white bg-blue-600 p-2 rounded-full" />
            </a>
            {/* <i className="lab la-twitter text-2xl text-white bg-blue-400 p-2 rounded-full" /> */}
            <a
              href="https://www.linkedin.com/company/cognilium-ai/"
              target="_blank"
            >
              <i className="lab la-linkedin-in text-2xl text-white bg-blue-700 p-2 rounded-full" />
            </a>
            {/* <i className="lab la-instagram text-2xl text-white bg-rose-600 p-2 rounded-full" /> */}
          </div>
          <p className="text-center">
            Contentgizmo © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;