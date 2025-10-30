import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // Sign-up form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribe: false,
  });

  // Sign-in form state
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up data:', signupData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-8">
      <div className="w-full max-w-5xl h-[600px] relative flex">

        {/* Left Yellow Side */}
        <div className="w-3/4 bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-800 relative overflow-hidden flex flex-col items-center justify-center px-12 text-white">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 6px)',
          }}></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <img src="/rich.png" alt="Logo" width="350" height="120" className="drop-shadow-2xl opacity-90 mb-8"/>
            <h1 className="text-4xl font-bold mb-6 text-center leading-tight">
              Invest in Bitcoin<br/>Together Fairly<br/>and Transparently.
            </h1>
            <p className="text-base text-center text-white/90 max-w-sm">
              Join a global pool of investors and own.
            </p>
          </div>
        </div>

        {/* Right Black Side overlapping */}
        <div className="w-3/4 bg-black relative z-10 -ml-16 rounded-l-[60px] overflow-hidden">

          {/* Sign Up Form */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${isLogin ? 'opacity-0 pointer-events-none translate-x-full' : 'opacity-100 translate-x-0'}`}>
            <div className="h-full flex flex-col items-center justify-center px-16">
              <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-1 text-center">Welcome To RICH</h2>
                <p className="text-gray-400 text-sm mb-6 text-center">Let's get started!</p>

                <div className="mb-6 text-center">
                  <span className="text-gray-400 text-sm">Already have an account? </span>
                  <button onClick={toggleForm} className="text-yellow-500 text-sm font-semibold hover:text-yellow-400 transition-colors">Sign in</button>
                </div>

                <form className="space-y-5" onSubmit={handleSignupSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="firstName" placeholder="First Name" value={signupData.firstName} onChange={handleSignupChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                    <input type="text" name="lastName" placeholder="Last Name" value={signupData.lastName} onChange={handleSignupChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                  </div>

                  <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={handleSignupChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                  </div>

                  <label className="flex items-start cursor-pointer text-xs text-gray-400">
                    <input type="checkbox" name="subscribe" checked={signupData.subscribe} onChange={handleSignupChange} className="mt-0.5 mr-2 accent-yellow-600"/>
                    Send me information about RICH
                  </label>

                  <button type="submit" className="w-full bg-transparent border-2 border-yellow-600 text-yellow-500 py-4 rounded-md font-bold hover:bg-yellow-600 hover:text-black transition-all">
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sign In Form */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${isLogin ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'}`}>
            <div className="h-full flex flex-col items-center justify-center px-16">
              <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-1 text-center">Welcome Back!</h2>
                <p className="text-gray-400 text-sm mb-6 text-center">So glad to see you again! Let's get you signed in.</p>

                <div className="mb-6 text-center">
                  <span className="text-gray-400 text-sm">Don't have an account? </span>
                  <button onClick={toggleForm} className="text-yellow-500 text-sm font-semibold hover:text-yellow-400 transition-colors">Sign Up</button>
                </div>

                <form className="space-y-5" onSubmit={handleLoginSubmit}>
                  <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                  <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required className="w-full px-5 py-4 bg-transparent border border-yellow-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"/>

                  <div className="text-right">
                    <a href="#" className="text-yellow-500 text-xs hover:text-yellow-400 transition-colors">Forgot Password?</a>
                  </div>

                  <button type="submit" className="w-full bg-transparent border-2 border-yellow-600 text-yellow-500 py-4 rounded-md font-bold hover:bg-yellow-600 hover:text-black transition-all">
                    SIGN IN
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
