
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Lock, CheckCircle, Github, Globe, MessageCircle } from 'lucide-react';
import { authService } from '../services/authService';
import { Button, Input } from '../components/ui/Inputs';
import { Container } from '../components/ui/Layouts';

// Custom Icons for Socials that Lucide might not have perfectly
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const WeChatIcon = () => (
   <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path d="M8.7 14.7c.3 0 .7.1 1 .2-.8 2.1-3 3.5-5.3 3.5C2 18.4 0 16.5 0 14.2c0-2.6 2.5-4.7 5.7-4.7 2.1 0 3.9.9 4.9 2.2-.4.9-.8 1.9-1.9 3zM15.4 3C10.6 3 6.8 6.2 6.8 10c0 .9.2 1.7.6 2.5.4-.4.8-.7 1.3-.9C8.3 7.2 11.6 4.6 15.4 4.6c4 0 7.3 2.7 7.3 6 0 1.9-1.1 3.5-2.9 4.7l.7 2.4-2.2-1.1c-.8.2-1.7.4-2.6.4-4.7 0-8.6-3.2-8.6-7.1 0-3.9 3.8-7 8.3-7z"/>
   </svg>
);

const Auth: React.FC = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const user = await authService.getUser();
      if (user) {
        navigate('/admin');
      }
    };
    checkUser();

    const { data: { subscription } } = authService.getClient().auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/admin');
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  // --- Handlers ---

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await authService.signInWithPassword(email, password);
      // Auto redirect via auth state listener
    } catch (err: any) {
      setError(err.message || 'Login failed. Check your password.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await authService.signInWithOtp(email);
      setOtpSent(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send code.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await authService.verifyOtp(email, otp);
      // Auto redirect via auth state listener
    } catch (err: any) {
      setError(err.message || 'Invalid code.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
      setLoading(true);
      try {
        await authService.signInWithOAuth(provider);
      } catch (err: any) {
          setError(err.message);
          setLoading(false);
      }
  };

  const handleWeChatLogin = () => {
      alert("WeChat Login requires Enterprise Setup. Please use Email or Google for this demo.");
  };

  return (
    <main className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-zinc-950 px-4">
      <Container className="w-full max-w-md">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          
          {/* Header & Tabs */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-6">NextFolio</h1>
            
            <div className="grid grid-cols-2 gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
               <button 
                onClick={() => { setAuthMode('login'); setOtpSent(false); setError(''); }}
                className={`py-2 text-sm font-medium rounded-md transition-all ${authMode === 'login' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 Log In
               </button>
               <button 
                onClick={() => { setAuthMode('register'); setOtpSent(false); setError(''); }}
                className={`py-2 text-sm font-medium rounded-md transition-all ${authMode === 'register' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 Register
               </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-md mb-6 text-sm flex items-start gap-2">
              <span className="mt-0.5">⚠️</span> {error}
            </div>
          )}

          {/* === LOGIN FORM === */}
          {authMode === 'login' && (
            <>
              {loginMethod === 'password' ? (
                <form onSubmit={handlePasswordLogin} className="animate-fade-in">
                  <Input 
                    label="Email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="you@example.com"
                    required
                  />
                  <div className="relative">
                    <Input 
                      label="Password" 
                      type="password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder="••••••••"
                      required
                    />
                    <button type="button" onClick={() => setLoginMethod('otp')} className="absolute right-0 top-0 text-xs text-primary hover:text-emerald-400">
                      Forgot? Use Code
                    </button>
                  </div>
                  <Button className="w-full mt-2" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                  </Button>
                </form>
              ) : (
                <div className="animate-fade-in">
                   {/* OTP Login Flow (reuses same logic as register OTP, just different UI context) */}
                   {!otpSent ? (
                      <form onSubmit={handleSendOtp}>
                        <Input 
                          label="Email for Verification Code" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required
                        />
                        <Button className="w-full" disabled={loading}>
                          {loading ? 'Sending...' : 'Send Login Code'}
                        </Button>
                        <button onClick={() => setLoginMethod('password')} className="w-full text-center text-xs text-zinc-500 mt-4 hover:text-white">
                           Cancel, use Password
                        </button>
                      </form>
                   ) : (
                      <form onSubmit={handleVerifyOtp}>
                        <div className="text-center mb-4 text-zinc-400 text-sm">Code sent to {email}</div>
                        <Input 
                          label="6-Digit Code" 
                          value={otp} 
                          onChange={(e) => setOtp(e.target.value)} 
                          className="text-center tracking-widest text-xl"
                          maxLength={6}
                          required
                        />
                        <Button className="w-full" disabled={loading}>
                          {loading ? 'Verifying...' : 'Verify & Log In'}
                        </Button>
                        <button onClick={() => setOtpSent(false)} className="w-full text-center text-xs text-zinc-500 mt-4 hover:text-white">
                           Change Email
                        </button>
                      </form>
                   )}
                </div>
              )}
            </>
          )}

          {/* === REGISTER FORM === */}
          {authMode === 'register' && (
            <div className="animate-fade-in">
              {!otpSent ? (
                <form onSubmit={handleSendOtp}>
                  <Input 
                    label="Email Address" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="you@example.com"
                    required
                  />
                  <div className="text-xs text-zinc-500 mb-4 bg-zinc-950 p-3 rounded border border-zinc-800">
                     <strong>Note:</strong> We use email verification codes for registration. You can set a password after logging in.
                  </div>
                  <Button className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Verification Code'}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp}>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mb-4">
                      <Mail size={24} />
                    </div>
                    <p className="text-white text-sm">Enter the code sent to <span className="font-bold">{email}</span></p>
                  </div>
                  <Input 
                    label="Verification Code" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    className="text-center tracking-widest text-xl"
                    maxLength={6}
                    placeholder="123456"
                    required
                  />
                  <Button className="w-full" disabled={loading}>
                    {loading ? 'Creating Account...' : 'Verify & Register'}
                  </Button>
                  <button onClick={() => setOtpSent(false)} type="button" className="w-full text-center text-xs text-zinc-500 mt-4 hover:text-white">
                     Wrong email? Go back
                  </button>
                </form>
              )}
            </div>
          )}

          {/* === SOCIAL DIVIDER === */}
          {!otpSent && (
            <>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-zinc-900 text-zinc-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => handleSocialLogin('google')}
                  className="flex items-center justify-center py-2.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <GoogleIcon />
                </button>
                <button 
                   onClick={() => handleSocialLogin('github')}
                   className="flex items-center justify-center py-2.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors text-white"
                >
                  <Github size={20} />
                </button>
                <button 
                   onClick={handleWeChatLogin}
                   className="flex items-center justify-center py-2.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <WeChatIcon />
                </button>
              </div>
            </>
          )}

        </div>
      </Container>
    </main>
  );
};

export default Auth;
