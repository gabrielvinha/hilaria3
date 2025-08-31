import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface FormData {
  nomeCompleto: string;
  idade: string;
  dificuldade: string;
  busca: string;
}

interface WhatsAppFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppFormModal: React.FC<WhatsAppFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    idade: "",
    dificuldade: "",
    busca: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = "Nome completo é obrigatório";
    }

    if (!formData.idade.trim()) {
      newErrors.idade = "Idade é obrigatória";
    } else if (isNaN(Number(formData.idade)) || Number(formData.idade) < 1) {
      newErrors.idade = "Digite uma idade válida";
    }

    if (!formData.dificuldade.trim()) {
      newErrors.dificuldade = "Este campo é obrigatório";
    }

    if (!formData.busca.trim()) {
      newErrors.busca = "Este campo é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `*Interesse na Mentoria Gestão Blindada*

*Nome:* ${formData.nomeCompleto}
*Idade:* ${formData.idade} anos
*Maior dificuldade na gestão condominial:* ${formData.dificuldade}
*O que busca na mentoria:* ${formData.busca}

Olá! Preenchi o formulário e gostaria de saber mais sobre a Mentoria Gestão Blindada.`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // WhatsApp URL
      const whatsappUrl = `https://wa.me/5531998666020?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Close modal after successful submission
      onClose();
      
      // Reset form
      setFormData({
        nomeCompleto: "",
        idade: "",
        dificuldade: "",
        busca: "",
      });
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      nomeCompleto: "",
      idade: "",
      dificuldade: "",
      busca: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-raleway text-xl font-bold text-navy-dark text-center">
            Quero participar da Mentoria Gestão Blindada
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-600">
            Preencha os dados abaixo para falar diretamente no WhatsApp
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Nome Completo */}
          <div className="space-y-2">
            <Label htmlFor="nomeCompleto" className="font-raleway font-medium text-navy-dark">
              Nome completo *
            </Label>
            <Input
              id="nomeCompleto"
              type="text"
              value={formData.nomeCompleto}
              onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
              placeholder="Digite seu nome completo"
              className={`font-raleway ${errors.nomeCompleto ? "border-red-500" : ""}`}
            />
            {errors.nomeCompleto && (
              <p className="text-red-500 text-xs font-raleway">{errors.nomeCompleto}</p>
            )}
          </div>

          {/* Idade */}
          <div className="space-y-2">
            <Label htmlFor="idade" className="font-raleway font-medium text-navy-dark">
              Idade *
            </Label>
            <Input
              id="idade"
              type="number"
              min="1"
              max="120"
              value={formData.idade}
              onChange={(e) => handleInputChange("idade", e.target.value)}
              placeholder="Digite sua idade"
              className={`font-raleway ${errors.idade ? "border-red-500" : ""}`}
            />
            {errors.idade && (
              <p className="text-red-500 text-xs font-raleway">{errors.idade}</p>
            )}
          </div>

          {/* Maior dificuldade */}
          <div className="space-y-2">
            <Label htmlFor="dificuldade" className="font-raleway font-medium text-navy-dark">
              Qual a maior dificuldade na sua gestão condominial? *
            </Label>
            <Textarea
              id="dificuldade"
              value={formData.dificuldade}
              onChange={(e) => handleInputChange("dificuldade", e.target.value)}
              placeholder="Ex: Assembleias tensas, conflitos entre moradores, dificuldade para aprovar decisões..."
              className={`font-raleway min-h-[80px] resize-none ${errors.dificuldade ? "border-red-500" : ""}`}
              rows={3}
            />
            {errors.dificuldade && (
              <p className="text-red-500 text-xs font-raleway">{errors.dificuldade}</p>
            )}
          </div>

          {/* O que busca */}
          <div className="space-y-2">
            <Label htmlFor="busca" className="font-raleway font-medium text-navy-dark">
              O que busca na mentoria "Gestão Blindada"? *
            </Label>
            <Textarea
              id="busca"
              value={formData.busca}
              onChange={(e) => handleInputChange("busca", e.target.value)}
              placeholder="Ex: Aprender a conduzir assembleias sem conflito, ter mais autoridade nas decisões, melhorar comunicação..."
              className={`font-raleway min-h-[80px] resize-none ${errors.busca ? "border-red-500" : ""}`}
              rows={3}
            />
            {errors.busca && (
              <p className="text-red-500 text-xs font-raleway">{errors.busca}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-start to-green-end hover:from-green-start/90 hover:to-green-end/90 text-white font-raleway font-bold text-sm uppercase tracking-wide py-3 rounded-full shadow-lg transition-all duration-300"
            >
              {isSubmitting ? "Enviando..." : "Falar no WhatsApp agora"}
            </Button>
            
            <p className="text-xs text-gray-500 text-center font-raleway">
              Você será redirecionado para o WhatsApp com suas informações já preenchidas
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};