'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { MapPin, Clock, GraduationCap, Calendar, DollarSign, CheckCircle2, X, Loader2, Upload, ExternalLink } from 'lucide-react';
import { Job } from './jobData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
}

const contractColors: Record<string, string> = {
  CDI: 'bg-green-50 text-green-700 border-green-200',
  CDD: 'bg-blue-50 text-blue-700 border-blue-200',
  Intérim: 'bg-amber-50 text-amber-700 border-amber-200',
  Freelance: 'bg-purple-50 text-purple-700 border-purple-200',
  Stage: 'bg-pink-50 text-pink-700 border-pink-200',
};

interface Props {
  job: Job;
}

export default function JobDetailPanel({ job }: Props) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // Mock auth state — in production, derive from Supabase session
  const isAuthenticated = false;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ApplicationForm>();

  const onSubmit = async (data: ApplicationForm) => {
    setIsLoading(true);
    // Backend integration: insert application into Supabase applications table
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    setSuccess(true);
    toast.success('Candidature envoyée avec succès !');
    setTimeout(() => { setApplyOpen(false); setSuccess(false); reset(); }, 2000);
  };

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      toast.info('Connectez-vous pour postuler à cette offre');
      return;
    }
    setApplyOpen(true);
  };

  return (
    <>
      <div className="card-base overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-navy-900 p-6 -mx-6 -mt-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-700 text-white mb-1" style={{ fontWeight: 700 }}>{job.title}</h2>
              <p className="text-sm text-white/70">{job.company}</p>
            </div>
            <span className={`status-badge border text-xs ${contractColors[job.contract] || ''}`}>
              {job.contract}
            </span>
          </div>

          {/* Quick meta */}
          <div className="flex flex-wrap gap-4 mt-5">
            {[
              { icon: MapPin, text: `${job.city}, Maroc` },
              { icon: Clock, text: job.experience },
              { icon: GraduationCap, text: job.education },
              { icon: Calendar, text: `Expire le ${job.deadline}` },
            ].map(({ icon: Icon, text }) => (
              <div key={`meta-${text}`} className="flex items-center gap-1.5 text-xs text-white/60">
                <Icon size={13} className="text-accent" />
                {text}
              </div>
            ))}
          </div>

          {job.salary && (
            <div className="flex items-center gap-1.5 mt-3 text-xs text-accent font-600" style={{ fontWeight: 600 }}>
              <DollarSign size={13} />
              {job.salary}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-28rem)] scrollbar-thin pr-1">
          {/* Description */}
          <div>
            <h3 className="text-sm font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Description du poste</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-sm font-700 text-primary mb-3" style={{ fontWeight: 700 }}>Missions principales</h3>
            <ul className="space-y-2">
              {job.mission.map((m, i) => (
                <li key={`mission-${i}`} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-sm font-700 text-primary mb-3" style={{ fontWeight: 700 }}>Profil recherché</h3>
            <ul className="space-y-2">
              {job.profile.map((p, i) => (
                <li key={`profile-${i}`} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-700 text-primary mb-3" style={{ fontWeight: 700 }}>Compétences requises</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <span key={`skill-${skill}`} className="px-3 py-1.5 rounded-full bg-muted text-xs font-600 text-foreground border border-border" style={{ fontWeight: 600 }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm font-700 text-primary mb-3" style={{ fontWeight: 700 }}>Langues</h3>
            <div className="flex flex-wrap gap-2">
              {job.languages.map(lang => (
                <span key={`lang-${lang}`} className="px-3 py-1.5 rounded-full bg-blue-50 text-xs font-600 text-blue-700 border border-blue-200" style={{ fontWeight: 600 }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-sm font-700 text-primary mb-3" style={{ fontWeight: 700 }}>Avantages</h3>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map(b => (
                <span key={`benefit-${b}`} className="px-3 py-1.5 rounded-full bg-green-50 text-xs font-600 text-green-700 border border-green-200" style={{ fontWeight: 600 }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="mt-6 pt-5 border-t border-border flex gap-3">
          {isAuthenticated ? (
            <button onClick={() => setApplyOpen(true)} className="btn-primary flex-1">
              Postuler à cette offre
            </button>
          ) : (
            <Link href="/sign-up-login-screen" className="btn-primary flex-1 justify-center">
              Se connecter pour postuler
            </Link>
          )}
          <button className="btn-outline px-4" title="Partager cette offre">
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {applyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={() => setApplyOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-700 text-primary" style={{ fontWeight: 700 }}>Postuler</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{job.title} — {job.company}</p>
                </div>
                <button onClick={() => setApplyOpen(false)} className="p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors">
                  <X size={18} />
                </button>
              </div>

              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-green-600" />
                  </div>
                  <h4 className="text-base font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Candidature envoyée !</h4>
                  <p className="text-sm text-muted-foreground">Nous reviendrons vers vous dans les meilleurs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label-field" htmlFor="apply-fn">Prénom</label>
                      <input id="apply-fn" type="text" className={`input-field ${errors.firstName ? 'error' : ''}`}
                        {...register('firstName', { required: 'Requis' })} />
                      {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="label-field" htmlFor="apply-ln">Nom</label>
                      <input id="apply-ln" type="text" className={`input-field ${errors.lastName ? 'error' : ''}`}
                        {...register('lastName', { required: 'Requis' })} />
                      {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="label-field" htmlFor="apply-email">Email</label>
                    <input id="apply-email" type="email" className={`input-field ${errors.email ? 'error' : ''}`}
                      {...register('email', { required: 'Requis', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' } })} />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="label-field" htmlFor="apply-phone">Téléphone</label>
                    <input id="apply-phone" type="tel" className="input-field" placeholder="+212 6XX XXX XXX"
                      {...register('phone')} />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="apply-cv">CV (PDF)</label>
                    <p className="text-xs text-muted-foreground mb-2">Joignez votre CV en format PDF (max. 5 Mo)</p>
                    <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <Upload size={20} className="text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Cliquez pour sélectionner votre CV</p>
                    </div>
                    {/* Backend integration: upload CV to Supabase Storage bucket 'cvs' */}
                  </div>

                  <div>
                    <label className="label-field" htmlFor="apply-cover">Lettre de motivation</label>
                    <p className="text-xs text-muted-foreground mb-2">Expliquez brièvement votre motivation pour ce poste</p>
                    <textarea
                      id="apply-cover"
                      rows={4}
                      className={`input-field resize-none ${errors.coverLetter ? 'error' : ''}`}
                      placeholder="Votre message..."
                      {...register('coverLetter', { required: 'La lettre de motivation est requise' })}
                    />
                    {errors.coverLetter && <p className="mt-1 text-xs text-red-600">{errors.coverLetter.message}</p>}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={() => setApplyOpen(false)} className="btn-outline flex-1">
                      Annuler
                    </button>
                    <button type="submit" disabled={isLoading} className="btn-primary flex-1 disabled:opacity-60">
                      {isLoading ? <Loader2 size={16} className="animate-spin" /> : 'Envoyer ma candidature'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}