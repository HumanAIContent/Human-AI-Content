import React, { useState } from 'react';
import { PACKAGES } from '../data/packages';
import { NavPage, PackagePlan } from '../types';
import { Check, ArrowRight, Sparkles, HelpCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingSectionProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenAgreements: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate, onOpenAgreements }) => {
  // CHANGE THIS LINE - Set to false instead of true
  const [showMatrix, setShowMatrix] = useState(false);
  const [showFullServiceDetails, setShowFullServiceDetails] = useState(false);

  const toggleFullServiceDetails = () => {
    setShowFullServiceDetails(!showFullServiceDetails);
  };

  // ... rest of your component code remains the same
