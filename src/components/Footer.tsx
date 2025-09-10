const Footer = () => {
  return (
    <footer className="bg-background py-16 ">
      <div className="container mx-auto px-6 pt-32 border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="space-y-4 col-span-3">
            <div className="text-3xl font-display font-bold text-foreground">
              MNTN
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Get out there & discover your next
              <br />
              slope, mountain & destination!
            </p>

            <p className="text-muted-foreground !mt-28">
              Copyright {new Date().getFullYear()} MNTN, Inc. Terms & Privacy
            </p>
          </div>

          {/* More on The Blog */}
          <div className="space-y-4 w-fit col-span-2">
            <h3 className="text-accent font-semibold text-lg">More on The Blog</h3>
            <div className="space-y-3">
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                About MNTN
              </a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                Contributors & Writers
              </a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                Write For Us
              </a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* More on MNTN */}
          <div className="space-y-4 w-fit col-span-1">
            <h3 className="text-accent font-semibold text-lg">More on MNTN</h3>
            <div className="space-y-3">
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                The Team
              </a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                Jobs
              </a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">
                Press
              </a>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h3 className="text-accent font-semibold text-lg">Stay Connected</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest mountain adventures and tips.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.142 0 .696-.442 1.738-.219 2.701.179.937.899 1.518 1.837 1.518 2.204 0 3.901-2.323 3.901-5.681 0-2.969-2.133-5.042-5.179-5.042-3.53 0-5.61 2.649-5.61 5.386 0 1.069.41 2.217.922 2.841.101.12.115.227.085.348-.092.379-.298 1.204-.339 1.375-.053.218-.173.265-.4.159-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641..012 12.017.012z"/>
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;