'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowRight, User, Building2, Check, Loader2, ArrowLeft } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';


type AuthTab = 'login' | 'register' | 'forgot';
type UserRole = 'candidate' | 'company';

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  acceptTerms: boolean;
}

interface ForgotForm {
  email: string;
}

const demoCredentials = [
{ role: 'Candidat', email: 'candidat.demo@sforhet.ma', password: 'Sforhet2025!' },
{ role: 'Entreprise', email: 'entreprise.demo@sforhet.ma', password: 'Sforhet2025!' },
{ role: 'Admin', email: 'admin@sforhet.ma', password: 'Admin@Sforhet25' }];


export default function AuthScreen() {
  const [tab, setTab] = useState<AuthTab>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('candidate');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  const loginForm = useForm<LoginForm>({ defaultValues: { email: '', password: '', remember: false } });
  const registerForm = useForm<RegisterForm>({ defaultValues: { role: 'candidate' } });
  const forgotForm = useForm<ForgotForm>();

  const handleCopy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const autofillCredentials = (cred: typeof demoCredentials[0]) => {
    loginForm.setValue('email', cred.email);
    loginForm.setValue('password', cred.password);
    toast.success(`Identifiants "${cred.role}" remplis automatiquement`);
  };

  const onLogin = async (data: LoginForm) => {
    setIsLoading(true);
    // Backend integration: authenticate via Supabase Auth
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);

    const matched = demoCredentials.find((c) => c.email === data.email && c.password === data.password);
    if (!matched) {
      toast.error('Identifiants invalides — utilisez les comptes de démonstration ci-dessous pour vous connecter');
      return;
    }

    toast.success(`Connexion réussie en tant que ${matched.role}`);
    if (matched.role === 'Candidat') window.location.href = '/candidate-portal-dashboard';else
    if (matched.role === 'Admin') window.location.href = '/admin-dashboard-cms';else
    window.location.href = '/espace-entreprise';
  };

  const onRegister = async (data: RegisterForm) => {
    if (data.password !== data.confirmPassword) {
      registerForm.setError('confirmPassword', { message: 'Les mots de passe ne correspondent pas' });
      return;
    }
    setIsLoading(true);
    // Backend integration: create user via Supabase Auth + insert profile
    await new Promise((r) => setTimeout(r, 1400));
    setIsLoading(false);
    toast.success('Compte créé avec succès ! Vérifiez votre email.');
    setTab('login');
  };

  const onForgot = async (data: ForgotForm) => {
    setIsLoading(true);
    // Backend integration: Supabase Auth resetPasswordForEmail
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    setForgotSent(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left panel — Brand */}
      <div className="hidden lg:flex flex-col relative overflow-hidden">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_158dc89e4-1772191726364.png"
          alt="Bureau professionnel moderne à Casablanca pour cabinet de conseil"
          width={900}
          height={900}
          priority
          fill
          className="object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />

        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <AppLogo size={44} />
            <div>
              <div className="font-bold text-base text-white leading-tight">EURO COMPETENCE</div>
              <div className="text-xs font-medium tracking-widest text-gold-400">SFORHET</div>
            </div>
          </Link>

          {/* Middle content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-12 h-0.5 bg-accent mb-6" />
            <h1 className="text-3xl font-800 text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
              Votre espace professionnel
            </h1>
            <p className="text-base text-white/60 leading-relaxed max-w-sm mb-8">
              Accédez à votre espace personnalisé pour gérer vos candidatures, formations et opportunités professionnelles.
            </p>

            <div className="space-y-3">
              {[
              { icon: User, text: 'Espace candidat — Gérez vos candidatures et formations' },
              { icon: Building2, text: 'Espace entreprise — Vos recrutements et demandes' }].
              map(({ icon: Icon, text }) =>
              <div key={`feature-${text}`} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <span className="text-sm text-white/70">{text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-white/30">
            © 2025 Euro Competence / SFORHET — Casablanca, Maroc
          </div>
        </div>
      </div>

      {/* Right panel — Form */}
      <div className="flex flex-col min-h-screen bg-background overflow-y-auto">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-6 border-b border-border bg-white">
          <Link href="/" className="flex items-center gap-2">
            <AppLogo size={36} />
            <span className="font-bold text-sm text-primary">SFORHET</span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-10 sm:px-12 max-w-md mx-auto w-full">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={15} />
            Retour au site
          </Link>

          {/* Tabs */}
          {tab !== 'forgot' &&
          <div className="flex bg-muted rounded-lg p-1 mb-8">
              {[
            { key: 'login' as AuthTab, label: 'Connexion' },
            { key: 'register' as AuthTab, label: 'Inscription' }].
            map(({ key, label }) =>
            <button
              key={`tab-${key}`}
              onClick={() => setTab(key)}
              className={`flex-1 py-2.5 text-sm font-600 rounded-md transition-all duration-200 ${
              tab === key ?
              'bg-white text-primary shadow-card' :
              'text-muted-foreground hover:text-foreground'}`
              }
              style={{ fontWeight: 600 }}>
              
                  {label}
                </button>
            )}
            </div>
          }

          {/* LOGIN FORM */}
          {tab === 'login' &&
          <div className="animate-fade-in">
              <div className="mb-7">
                <h2 className="text-2xl font-700 text-primary mb-1.5" style={{ fontWeight: 700 }}>Bon retour !</h2>
                <p className="text-sm text-muted-foreground">Connectez-vous à votre espace personnel.</p>
              </div>

              <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-5">
                <div>
                  <label className="label-field" htmlFor="login-email">Adresse email</label>
                  <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  className={`input-field ${loginForm.formState.errors.email ? 'error' : ''}`}
                  placeholder="votre@email.ma"
                  {...loginForm.register('email', {
                    required: 'L\'email est requis',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
                  })} />
                
                  {loginForm.formState.errors.email &&
                <p className="mt-1.5 text-xs text-red-600">{loginForm.formState.errors.email.message}</p>
                }
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="label-field mb-0" htmlFor="login-password">Mot de passe</label>
                    <button
                    type="button"
                    onClick={() => setTab('forgot')}
                    className="text-xs text-accent hover:underline font-500"
                    style={{ fontWeight: 500 }}>
                    
                      Mot de passe oublié ?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    className={`input-field pr-10 ${loginForm.formState.errors.password ? 'error' : ''}`}
                    placeholder="••••••••"
                    {...loginForm.register('password', { required: 'Le mot de passe est requis' })} />
                  
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}>
                    
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {loginForm.formState.errors.password &&
                <p className="mt-1.5 text-xs text-red-600">{loginForm.formState.errors.password.message}</p>
                }
                </div>

                <div className="flex items-center gap-2">
                  <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary"
                  {...loginForm.register('remember')} />
                
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Se souvenir de moi
                  </label>
                </div>

                <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ minWidth: '200px' }}>
                
                  {isLoading ?
                <Loader2 size={16} className="animate-spin" /> :

                <>
                      Se connecter
                      <ArrowRight size={16} />
                    </>
                }
                </button>
              </form>

              {/* Demo credentials */}
              <div className="mt-8 p-4 rounded-xl bg-muted border border-border">
                <p className="text-xs font-700 text-muted-foreground mb-3 uppercase tracking-wider" style={{ fontWeight: 700 }}>
                  Comptes de démonstration
                </p>
                <div className="space-y-2">
                  {demoCredentials.map((cred) =>
                <div
                  key={`cred-${cred.role}`}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-border hover:border-primary/30 transition-colors">
                  
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-700 text-primary w-20 shrink-0" style={{ fontWeight: 700 }}>{cred.role}</span>
                        <span className="text-xs text-muted-foreground truncate max-w-32">{cred.email}</span>
                      </div>
                      <button
                    onClick={() => autofillCredentials(cred)}
                    className="text-xs text-accent hover:text-gold-700 font-600 px-2 py-1 rounded hover:bg-accent/10 transition-colors"
                    style={{ fontWeight: 600 }}>
                    
                        Utiliser
                      </button>
                    </div>
                )}
                </div>
              </div>
            </div>
          }

          {/* REGISTER FORM */}
          {tab === 'register' &&
          <div className="animate-fade-in">
              <div className="mb-7">
                <h2 className="text-2xl font-700 text-primary mb-1.5" style={{ fontWeight: 700 }}>Créer un compte</h2>
                <p className="text-sm text-muted-foreground">Rejoignez la communauté SFORHET.</p>
              </div>

              {/* Role selector */}
              <div className="mb-6">
                <p className="label-field mb-3">Je suis</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                { value: 'candidate' as UserRole, icon: User, label: 'Candidat', sub: 'Je cherche un emploi ou une formation' },
                { value: 'company' as UserRole, icon: Building2, label: 'Entreprise', sub: 'Je recrute ou cherche une formation' }].
                map(({ value, icon: Icon, label, sub }) =>
                <button
                  key={`role-${value}`}
                  type="button"
                  onClick={() => {
                    setSelectedRole(value);
                    registerForm.setValue('role', value);
                  }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                  selectedRole === value ?
                  'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`
                  }>
                  
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedRole === value ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`
                  }>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>{label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
                      </div>
                    </button>
                )}
                </div>
              </div>

              <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label-field" htmlFor="reg-firstname">Prénom</label>
                    <input
                    id="reg-firstname"
                    type="text"
                    className={`input-field ${registerForm.formState.errors.firstName ? 'error' : ''}`}
                    placeholder="Prénom"
                    {...registerForm.register('firstName', { required: 'Requis' })} />
                  
                    {registerForm.formState.errors.firstName &&
                  <p className="mt-1 text-xs text-red-600">{registerForm.formState.errors.firstName.message}</p>
                  }
                  </div>
                  <div>
                    <label className="label-field" htmlFor="reg-lastname">Nom</label>
                    <input
                    id="reg-lastname"
                    type="text"
                    className={`input-field ${registerForm.formState.errors.lastName ? 'error' : ''}`}
                    placeholder="Nom de famille"
                    {...registerForm.register('lastName', { required: 'Requis' })} />
                  
                    {registerForm.formState.errors.lastName &&
                  <p className="mt-1 text-xs text-red-600">{registerForm.formState.errors.lastName.message}</p>
                  }
                  </div>
                </div>

                <div>
                  <label className="label-field" htmlFor="reg-email">Email professionnel</label>
                  <input
                  id="reg-email"
                  type="email"
                  className={`input-field ${registerForm.formState.errors.email ? 'error' : ''}`}
                  placeholder="votre@email.ma"
                  {...registerForm.register('email', {
                    required: 'Email requis',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
                  })} />
                
                  {registerForm.formState.errors.email &&
                <p className="mt-1 text-xs text-red-600">{registerForm.formState.errors.email.message}</p>
                }
                </div>

                <div>
                  <label className="label-field" htmlFor="reg-phone">Téléphone</label>
                  <input
                  id="reg-phone"
                  type="tel"
                  className="input-field"
                  placeholder="+212 6XX XXX XXX"
                  {...registerForm.register('phone')} />
                
                </div>

                <div>
                  <label className="label-field" htmlFor="reg-password">Mot de passe</label>
                  <div className="relative">
                    <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    className={`input-field pr-10 ${registerForm.formState.errors.password ? 'error' : ''}`}
                    placeholder="Minimum 8 caractères"
                    {...registerForm.register('password', {
                      required: 'Mot de passe requis',
                      minLength: { value: 8, message: 'Minimum 8 caractères' }
                    })} />
                  
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Afficher/masquer le mot de passe">
                    
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {registerForm.formState.errors.password &&
                <p className="mt-1 text-xs text-red-600">{registerForm.formState.errors.password.message}</p>
                }
                </div>

                <div>
                  <label className="label-field" htmlFor="reg-confirm">Confirmer le mot de passe</label>
                  <div className="relative">
                    <input
                    id="reg-confirm"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={`input-field pr-10 ${registerForm.formState.errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Répétez le mot de passe"
                    {...registerForm.register('confirmPassword', { required: 'Confirmation requise' })} />
                  
                    <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Afficher/masquer la confirmation">
                    
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {registerForm.formState.errors.confirmPassword &&
                <p className="mt-1 text-xs text-red-600">{registerForm.formState.errors.confirmPassword.message}</p>
                }
                </div>

                <div className="flex items-start gap-2">
                  <input
                  id="accept-terms"
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-border"
                  {...registerForm.register('acceptTerms', { required: 'Vous devez accepter les conditions' })} />
                
                  <label htmlFor="accept-terms" className="text-sm text-muted-foreground leading-relaxed">
                    J'accepte les{' '}
                    <Link href="/mentions-legales" className="text-accent hover:underline">conditions d'utilisation</Link>
                    {' '}et la{' '}
                    <Link href="/confidentialite" className="text-accent hover:underline">politique de confidentialité</Link>
                  </label>
                </div>
                {registerForm.formState.errors.acceptTerms &&
              <p className="text-xs text-red-600">{registerForm.formState.errors.acceptTerms.message}</p>
              }

                <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                
                  {isLoading ?
                <Loader2 size={16} className="animate-spin" /> :

                <>
                      Créer mon compte
                      <ArrowRight size={16} />
                    </>
                }
                </button>
              </form>
            </div>
          }

          {/* FORGOT PASSWORD */}
          {tab === 'forgot' &&
          <div className="animate-fade-in">
              <button
              onClick={() => setTab('login')}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              
                <ArrowLeft size={15} />
                Retour à la connexion
              </button>

              {!forgotSent ?
            <>
                  <div className="mb-7">
                    <h2 className="text-2xl font-700 text-primary mb-1.5" style={{ fontWeight: 700 }}>Mot de passe oublié</h2>
                    <p className="text-sm text-muted-foreground">
                      Entrez votre email pour recevoir un lien de réinitialisation.
                    </p>
                  </div>

                  <form onSubmit={forgotForm.handleSubmit(onForgot)} className="space-y-5">
                    <div>
                      <label className="label-field" htmlFor="forgot-email">Adresse email</label>
                      <input
                    id="forgot-email"
                    type="email"
                    className={`input-field ${forgotForm.formState.errors.email ? 'error' : ''}`}
                    placeholder="votre@email.ma"
                    {...forgotForm.register('email', {
                      required: 'Email requis',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
                    })} />
                  
                      {forgotForm.formState.errors.email &&
                  <p className="mt-1.5 text-xs text-red-600">{forgotForm.formState.errors.email.message}</p>
                  }
                    </div>
                    <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full py-3.5 disabled:opacity-60">
                  
                      {isLoading ? <Loader2 size={16} className="animate-spin" /> : 'Envoyer le lien'}
                    </button>
                  </form>
                </> :

            <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Email envoyé !</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Si un compte existe avec cet email, vous recevrez un lien de réinitialisation dans quelques minutes.
                  </p>
                  <button
                onClick={() => {setTab('login');setForgotSent(false);}}
                className="btn-outline text-sm">
                
                    Retour à la connexion
                  </button>
                </div>
            }
            </div>
          }
        </div>
      </div>
    </div>);

}