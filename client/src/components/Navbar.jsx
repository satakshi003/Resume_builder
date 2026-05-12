import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../app/features/authSlice.js';
import { LogOut, Menu, X, Sparkles, LayoutDashboard, FileText } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for dynamic glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "glass border-b border-white/5 shadow-lg shadow-black/20 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <div className="flex items-center gap-8">
              <Link to='/' className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-blue-400 transition-all duration-300">
                  AIBuilder
                </span>
              </Link>
              
              {/* Desktop Nav Links */}
              {user && (
                <nav className="hidden md:flex items-center gap-6">
                  <Link to="/" className="text-sm font-medium text-text-muted hover:text-white transition-colors flex items-center gap-1.5">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                </nav>
              )}
            </div>

            {/* Profile & Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center group-hover:border-brand-500/50 transition-colors">
                      <span className="text-sm font-semibold text-brand-300">
                        {getInitials(user.username)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-text-main pr-2">
                      {user.username}
                    </span>
                  </div>
                  <button 
                    onClick={logoutUser} 
                    className="btn-secondary group px-4 py-2 flex items-center gap-2 text-text-muted hover:text-white"
                  >
                    <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login" className="text-sm font-medium text-text-muted hover:text-white transition-colors px-4 py-2">
                    Sign In
                  </Link>
                  <Link to="/register" className="btn-primary">
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/5 active:scale-95 transition-all"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-[72px] inset-x-0 bg-[#121214] border-b border-white/5 p-4 transition-transform duration-300 shadow-2xl ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {user ? (
            <div className="flex flex-col gap-4">
              {/* Mobile Profile Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                  <span className="text-lg font-semibold text-brand-300">
                    {getInitials(user.username)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{user.username}</p>
                  <p className="text-xs text-text-muted mt-0.5">Premium Plan</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/5 my-1"></div>
              
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Link>
              
              <button 
                onClick={() => {
                  logoutUser();
                  setMobileMenuOpen(false);
                }} 
                className="flex items-center gap-3 px-4 py-3 w-full text-left text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors mt-2"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 p-2">
               <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-center text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors">Sign In</Link>
               <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full py-3 text-center justify-center">Get Started</Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Spacer to avoid layout shifts */}
      <div className="h-[88px]"></div>
    </>
  );
};

export default Navbar;