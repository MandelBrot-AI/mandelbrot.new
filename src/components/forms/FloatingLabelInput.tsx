import React from 'react';

interface FloatingLabelInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  textarea?: boolean;
}

export default function FloatingLabelInput({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onFocus,
  onBlur,
  textarea = false,
}: FloatingLabelInputProps) {
  const sharedProps = {
    name,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    className:
      'bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300 w-full',
  };

  return (
    <div className="floating-label-input">
      {textarea ? (
        <textarea {...sharedProps as any} rows={4} />
      ) : (
        <input type={type} {...sharedProps as any} />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
