import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Handshake, ExternalLink, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { insertPartnershipSchema, type InsertPartnership } from "@shared/schema";

export default function Partnership() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertPartnership>({
    resolver: zodResolver(insertPartnershipSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      privacyConsent: false,
    },
  });

  const submitPartnership = useMutation({
    mutationFn: async (data: InsertPartnership) => {
      return apiRequest("POST", "/api/partnerships", data);
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Hemos recibido su solicitud de cotización. Nos pondremos en contacto pronto.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/partnerships"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un problema al enviar su solicitud. Inténtelo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertPartnership) => {
    submitPartnership.mutate(data);
  };

  return (
    <section id="socio" className="py-20 bg-telefire-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white section-reveal">
            <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide mb-4">TRABAJA CON TELEFIRE</div>
            <h2 className="text-4xl font-bold mb-6">Buscamos Socios Integradores</h2>
            <p className="text-xl text-blue-100 mb-6">
              Buscamos socios integradores especializados en México.
            </p>
            <p className="text-blue-100 mb-8 leading-relaxed">
              ¿Eres integrador o distribuidor de sistemas de detección de incendios y gestión de edificios en México? 
              Únete a la familia de Telefire y acompáñanos en el camino hacia un mundo en el que todos 
              disfrutemos de total tranquilidad en edificios inteligentes.
            </p>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Handshake className="h-8 w-8 text-white" />
                  <h4 className="text-lg font-semibold text-white">Programa de Socios</h4>
                </div>
                <p className="text-blue-100 mb-4">Descubra valiosas oportunidades e inigualables descuentos dentro de nuestro programa de socios.</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-200 hover:text-white hover:bg-white/10 p-0 h-auto"
                  asChild
                >
                  <a href="https://telefire.com/wp-content/uploads/2024/02/partnership-paper-Spanish.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <span className="font-semibold">Haga clic aquí para explorar</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="section-reveal">
            {/* Quote List */}
            <div id="quote-list" className="mb-6" style={{ display: 'none' }}>
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-green-800 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Productos en Cotización
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-xs border-green-300 text-green-700 hover:bg-green-100"
                      onClick={() => {
                        const element = document.querySelector('#productos');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      ← Ver Productos
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul id="quote-items" className="space-y-2 text-sm text-green-700">
                    {/* Items will be added dynamically */}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Contacta con Nosotros y Completa tu Cotización</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ingrese su nombre completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electrónico *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="correo@empresa.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+52 (55) 1234-5678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de su empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Cuéntanos sobre tu proyecto..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="privacyConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-600">
                              Al marcar esta casilla, autorizas el uso de tus datos de acuerdo con nuestra{" "}
                              <a href="#" className="text-telefire-blue hover:underline">
                                política de protección de datos
                              </a>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-telefire-blue hover:bg-blue-700"
                      disabled={submitPartnership.isPending}
                    >
                      {submitPartnership.isPending ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
