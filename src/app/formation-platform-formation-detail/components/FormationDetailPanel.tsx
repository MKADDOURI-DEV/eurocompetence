'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { X, Clock, MapPin, Calendar, Users, BookOpen, Zap, ChevronDown, ChevronUp, CheckCircle2, Loader2, GraduationCap } from 'lucide-react';
import { Formation } from './formationData';
import Icon from '@/components/ui/AppIcon';


interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  message: string;
  ofpptRequest: boolean;
}

type DetailTab = 'overview' | 'programme' | 'modalites' | 'inscription';

const statusConfig = {
  Disponible: { bg: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-500' },
  Complet: { bg: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500' },
  Bientôt: { bg: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
};

interface Props {
  formation: Formation;
  onClose: () => void;
}

export default function FormationDetailPanel({ formation, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationForm>();

  const sc = statusConfig[formation.status];
  const occupancy = Math.round((formation.currentParticipants / formation.maxParticipants) * 100);

  const onSubmit = async (data: RegistrationForm) => {
    setIsLoading(true);
    // Backend integration: insert training registration into Supabase training_registrations table
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    setSuccess(true);
    toast.success('Inscription envoyée ! Nous vous contacterons sous 48h.');
  };

  const tabs: { key: DetailTab; label: string }[] = [
    { key: 'overview', label: 'Aperçu' },
    { key: 'programme', label: 'Programme' },
    { key: 'modalites', label: 'Modalités' },
    { key: 'inscription', label: 'S\'inscrire' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white h-full w-full max-w-2xl shadow-2xl overflow-y-auto animate-slide-up sm:animate-none sm:translate-x-0 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-navy-900 p-6 shrink-0">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <span className="text-xs font-600 text-accent bg-accent/20 px-2.5 py-1 rounded-full" style={{ fontWeight: 600 }}>
                {formation.category}
              </span>
              <h2 className="text-xl font-700 text-white mt-3 mb-1" style={{ fontWeight: 700 }}>{formation.title}</h2>
              <p className="text-sm text-white/60">{formation.shortDescription}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0">
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className={`status-badge border text-xs ${sc.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} mr-1.5`} />
              {formation.status}
            </span>
            {[
              { icon: Clock, text: formation.duration },
              { icon: Calendar, text: formation.nextDate },
              { icon: MapPin, text: formation.location },
            ].map(({ icon: Icon, text }) => (
              <div key={`header-meta-${text}`} className="flex items-center gap-1.5 text-xs text-white/60">
                <Icon size={13} className="text-accent" />
                {text}
              </div>
            ))}
          </div>

          {formation.ofpptFinancing && (
            <div className="mt-3 flex items-center gap-2 text-xs text-accent font-600" style={{ fontWeight: 600 }}>
              <Zap size={13} />
              Financement OFPPT disponible — Tiers Payant (70% OFPPT / 30% entreprise)
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-white shrink-0">
          {tabs.map(({ key, label }) => (
            <button
              key={`tab-detail-${key}`}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-3.5 text-xs font-600 transition-all border-b-2 ${
                activeTab === key
                  ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontWeight: 600 }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 p-6 overflow-y-auto scrollbar-thin">

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Description */}
              <div>
                <h3 className="text-sm font-700 text-primary mb-2" style={{ fontWeight: 700 }}>À propos de cette formation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{formation.fullDescription}</p>
              </div>

              {/* Objectives */}
              <div>
                <h3 className="text-sm font-700 text-primary mb-3" style={{ fontWeight: 700 }}>Objectifs pédagogiques</h3>
                <ul className="space-y-2">
                  {formation.objectives.map((obj, i) => (
                    <li key={`obj-${i}`} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target audience */}
              <div>
                <h3 className="text-sm font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Public cible</h3>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-100">
                  <Users size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-blue-800">{formation.targetAudience}</p>
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h3 className="text-sm font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Prérequis</h3>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted border border-border">
                  <BookOpen size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{formation.prerequisites}</p>
                </div>
              </div>

              {/* Occupancy */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Places disponibles</h3>
                  <span className="text-sm font-600 text-foreground font-tabular" style={{ fontWeight: 600 }}>
                    {formation.maxParticipants - formation.currentParticipants} places restantes
                  </span>
                </div>
                <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden mb-1.5">
                  <div
                    className={`h-full rounded-full transition-all ${
                      occupancy >= 90 ? 'bg-red-400' : occupancy >= 60 ? 'bg-amber-400' : 'bg-green-400'
                    }`}
                    style={{ width: `${occupancy}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {formation.currentParticipants} inscrits sur {formation.maxParticipants} places
                </p>
              </div>

              <button
                onClick={() => setActiveTab('inscription')}
                className="btn-primary w-full py-3.5"
              >
                <GraduationCap size={16} />
                S'inscrire à cette formation
              </button>
            </div>
          )}

          {/* PROGRAMME TAB */}
          {activeTab === 'programme' && (
            <div className="space-y-3 animate-fade-in">
              <div className="mb-4">
                <h3 className="text-sm font-700 text-primary mb-1" style={{ fontWeight: 700 }}>Programme détaillé</h3>
                <p className="text-xs text-muted-foreground">Durée totale : {formation.duration}</p>
              </div>

              {formation.program.map((module, i) => (
                <div
                  key={`module-${i}`}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedModule(expandedModule === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'rgba(15,32,68,0.06)' }}>
                        <span className="text-xs font-700 text-primary" style={{ fontWeight: 700 }}>{i + 1}</span>
                      </div>
                      <span className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>{module.module}</span>
                    </div>
                    {expandedModule === i
                      ? <ChevronUp size={16} className="text-muted-foreground shrink-0" />
                      : <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                    }
                  </button>

                  {expandedModule === i && (
                    <div className="px-4 pb-4 border-t border-border bg-muted/30">
                      <ul className="space-y-2 pt-3">
                        {module.topics.map((topic, j) => (
                          <li key={`topic-${i}-${j}`} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => setActiveTab('inscription')}
                className="btn-primary w-full py-3.5 mt-4"
              >
                S'inscrire à cette formation
              </button>
            </div>
          )}

          {/* MODALITÉS TAB */}
          {activeTab === 'modalites' && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Modalités pratiques</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Format', value: formation.format, icon: BookOpen },
                  { label: 'Durée', value: formation.duration, icon: Clock },
                  { label: 'Lieu', value: formation.location, icon: MapPin },
                  { label: 'Prochaine session', value: formation.nextDate, icon: Calendar },
                  { label: 'Niveau', value: formation.level, icon: GraduationCap },
                  { label: 'Participants max.', value: `${formation.maxParticipants} personnes`, icon: Users },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={`modal-${label}`} className="p-4 rounded-xl bg-muted border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-accent" />
                      <span className="text-xs font-600 text-muted-foreground" style={{ fontWeight: 600 }}>{label}</span>
                    </div>
                    <p className="text-sm font-700 text-foreground" style={{ fontWeight: 700 }}>{value}</p>
                  </div>
                ))}
              </div>

              {/* OFPPT financing section */}
              {formation.ofpptFinancing && (
                <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={16} className="text-amber-600" />
                    <h4 className="text-sm font-700 text-amber-800" style={{ fontWeight: 700 }}>Financement OFPPT disponible</h4>
                  </div>
                  <p className="text-sm text-amber-700 leading-relaxed mb-3">
                    Cette formation est éligible au dispositif Tiers Payant OFPPT. 
                    Votre entreprise ne paie que <strong>30%</strong> du coût de la formation, 
                    les <strong>70% restants</strong> sont pris en charge par l'OFPPT.
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      'Valable pour les entreprises cotisantes à la taxe de formation professionnelle',
                      'SFORHET gère toutes les démarches administratives',
                      'Délai de traitement : 5 à 10 jours ouvrables',
                    ].map((item, i) => (
                      <li key={`ofppt-${i}`} className="flex items-start gap-2 text-xs text-amber-700">
                        <CheckCircle2 size={13} className="text-amber-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructor */}
              <div className="p-4 rounded-xl border border-border">
                <h4 className="text-sm font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Formateur</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={18} className="text-primary/60" />
                  </div>
                  <div>
                    <p className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>{formation.instructor}</p>
                    <p className="text-xs text-muted-foreground">Expert SFORHET certifié</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('inscription')}
                className="btn-primary w-full py-3.5"
              >
                S'inscrire à cette formation
              </button>
            </div>
          )}

          {/* INSCRIPTION TAB */}
          {activeTab === 'inscription' && (
            <div className="animate-fade-in">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-700 text-primary mb-2" style={{ fontWeight: 700 }}>Inscription envoyée !</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                    Votre demande d'inscription a été reçue. Notre équipe vous contactera dans les 48 heures pour confirmer votre inscription.
                  </p>
                  <button
                    onClick={() => { setSuccess(false); reset(); }}
                    className="btn-outline text-sm"
                  >
                    Nouvelle inscription
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-base font-700 text-primary mb-1" style={{ fontWeight: 700 }}>
                      Formulaire d'inscription
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Remplissez ce formulaire pour vous inscrire à la formation{' '}
                      <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>"{formation.title}"</span>.
                    </p>
                  </div>

                  {formation.status === 'Complet' && (
                    <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200">
                      <p className="text-sm text-red-700 font-600" style={{ fontWeight: 600 }}>
                        Cette session est complète. Vous pouvez vous inscrire sur liste d'attente ou être informé de la prochaine session.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="label-field" htmlFor="reg-fn">Prénom</label>
                        <input
                          id="reg-fn"
                          type="text"
                          className={`input-field ${errors.firstName ? 'error' : ''}`}
                          placeholder="Prénom"
                          {...register('firstName', { required: 'Requis' })}
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="label-field" htmlFor="reg-ln">Nom</label>
                        <input
                          id="reg-ln"
                          type="text"
                          className={`input-field ${errors.lastName ? 'error' : ''}`}
                          placeholder="Nom"
                          {...register('lastName', { required: 'Requis' })}
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="label-field" htmlFor="reg-email">Email professionnel</label>
                      <input
                        id="reg-email"
                        type="email"
                        className={`input-field ${errors.email ? 'error' : ''}`}
                        placeholder="votre@email.ma"
                        {...register('email', {
                          required: 'Email requis',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' },
                        })}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="label-field" htmlFor="reg-phone">Téléphone</label>
                      <input
                        id="reg-phone"
                        type="tel"
                        className="input-field"
                        placeholder="+212 6XX XXX XXX"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <label className="label-field" htmlFor="reg-company">Entreprise</label>
                      <p className="text-xs text-muted-foreground mb-1.5">Nécessaire pour le financement OFPPT</p>
                      <input
                        id="reg-company"
                        type="text"
                        className={`input-field ${errors.company ? 'error' : ''}`}
                        placeholder="Nom de votre entreprise"
                        {...register('company', { required: 'Requis' })}
                      />
                      {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>}
                    </div>

                    <div>
                      <label className="label-field" htmlFor="reg-position">Poste occupé</label>
                      <input
                        id="reg-position"
                        type="text"
                        className="input-field"
                        placeholder="Votre intitulé de poste"
                        {...register('position')}
                      />
                    </div>

                    {formation.ofpptFinancing && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                        <input
                          id="ofppt-request"
                          type="checkbox"
                          className="w-4 h-4 mt-0.5 rounded border-amber-300 text-amber-600"
                          {...register('ofpptRequest')}
                        />
                        <label htmlFor="ofppt-request" className="text-sm text-amber-800 cursor-pointer leading-relaxed">
                          <span className="font-700" style={{ fontWeight: 700 }}>Je souhaite bénéficier du financement OFPPT</span>
                          {' '}(Tiers Payant — 70% OFPPT, 30% entreprise). SFORHET gérera les démarches administratives.
                        </label>
                      </div>
                    )}

                    <div>
                      <label className="label-field" htmlFor="reg-message">Message (optionnel)</label>
                      <p className="text-xs text-muted-foreground mb-1.5">
                        Précisez vos attentes ou le nombre de participants si vous souhaitez une session intra-entreprise
                      </p>
                      <textarea
                        id="reg-message"
                        rows={3}
                        className="input-field resize-none"
                        placeholder="Vos remarques ou questions..."
                        {...register('message')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || formation.status === 'Complet'}
                      className="btn-primary w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : formation.status === 'Complet' ? (
                        'Session complète — Liste d\'attente'
                      ) : (
                        <>
                          <GraduationCap size={16} />
                          Confirmer mon inscription
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par SFORHET pour confirmer votre inscription.
                    </p>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}