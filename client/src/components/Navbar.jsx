import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../app/features/authSlice.js';
import { LogOut, Menu, X, Sparkles, LayoutDashboard, FileText, ChevronRight } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for dynamic glassmorphism and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutUser = () => {
    navigate('/');
    dispatch(logout());
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <>
      <header 
        className={`sticky top-0 inset-x-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3" 
            : "bg-white/40 backdrop-blur-md border-b border-gray-200/30 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <div className="flex items-center gap-10">
              <Link to='/' className="flex items-center gap-3 group outline-none">
                <img src="/shield.png" alt="VeloraCV Shield" className="h-10 w-auto object-contain" />
                <span className="text-xl font-bold font-heading tracking-tight text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-violet-600 transition-all duration-300">
                  VeloraCV
                </span>
              </Link>
              
              {/* Desktop Nav Links */}
              {user && (
                <nav className="hidden md:flex items-center gap-8">
                  
                </nav>
              )}
            </div>

            {/* Profile & Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-5">
              {user ? (
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-3 pl-1 pr-4 py-1 rounded-full border border-gray-200 bg-white/60 hover:bg-white hover:border-gray-300 transition-all shadow-sm cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:border-brand-200 group-hover:bg-brand-100 transition-colors">
                      <span className="text-sm font-semibold text-brand-700">
                        {getInitials(user.username)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {user.username}
                    </span>
                  </div>
                  <div className="h-5 w-px bg-gray-200"></div>
                  <button 
                    onClick={logoutUser} 
                    className="text-sm font-medium text-text-secondary hover:text-red-600 flex items-center gap-2 transition-colors outline-none group"
                  >
                    <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/app?state=login" className="text-sm font-medium text-text-secondary hover:text-gray-900 transition-colors px-2 outline-none">
                    Log in
                  </Link>
                  <Link to="/app?state=register" className="btn-primary px-6 shadow-[0_4px_14px_0_rgba(99,102,241,0.3)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)]">
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-1 -mr-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-gray-600 hover:text-brand-600 hover:bg-brand-50 active:scale-95 transition-all outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-md md:hidden transition-opacity duration-400 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-[76px] inset-x-4 bg-white border border-gray-200 rounded-2xl p-5 transition-all duration-400 shadow-2xl ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          {user ? (
            <div className="flex flex-col gap-2">
              {/* Mobile Profile Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 mb-2">
                <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center shadow-inner">
                  <span className="text-lg font-semibold text-brand-600">
                    {getInitials(user.username)}
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">{user.username}</p>
                  <p className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md inline-block mt-1">Premium Plan</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-gray-100 my-2"></div>
              


              <Link to="/templates" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors">
                <FileText className="w-5 h-5 text-gray-400" />
                Templates
              </Link>
              
              <button 
                onClick={() => {
                  logoutUser();
                  setMobileMenuOpen(false);
                }} 
                className="flex items-center gap-3 px-4 py-3 w-full text-left text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors mt-2"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-2">
               <Link to="/app?state=login" onClick={() => setMobileMenuOpen(false)} className="btn-secondary w-full py-3.5 text-center justify-center border-gray-200">Log in</Link>
               <Link to="/app?state=register" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full py-3.5 text-center justify-center shadow-[0_4px_14px_0_rgba(99,102,241,0.3)]">Get Started</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;