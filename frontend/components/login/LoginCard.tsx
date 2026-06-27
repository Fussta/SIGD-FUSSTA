'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, senha, lembrar });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Solidariedade no rodapé centralizado */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <Image 
          src="/solidariedade.png" 
          alt="Solidariedade" 
          width={380}
          height={85}
          className="object-contain opacity-95"
        />
      </div>

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10">

        {/* LADO ESQUERDO */}
        <div className="md:w-5/12 bg-white p-12 flex flex-col justify-between">
          <div>
            <div className="mb-16">
              <Image 
                src="/logo-fussta.png" 
                alt="FUSSTA Logo" 
                height={400}
                width={400}
                className="mx-auto md:mx-0"
                priority
                style={{ backgroundColor: 'transparent' }}
              />
            </div>

            <h1 className="text-gray-900 text-[28px] font-bold leading-tight mb-8 text-left">
              Gestão inteligente para quem transforma vidas
            </h1>

            <p className="text-gray-600 text-[17px] leading-relaxed text-center max-w-md mx-auto mt-8">
              Sistema Integrado de Gestão de Doações<br />
              do Fundo Social de Taubaté.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <Image 
              src="/brasao-taubate.png" 
              alt="Brasão Taubaté" 
              height={190}
              width={190}
              className="object-contain"
            />
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="md:w-7/12 bg-gradient-to-br from-blue-600 to-blue-700 p-12 flex flex-col text-white">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-3xl font-bold">SIGD-FUSSTA</h2>
              <p className="text-blue-100 mt-2">Sistema Integrado de Gestão de Doações</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-blue-200 text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Senha</label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-blue-200 text-lg"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={lembrar}
                    onChange={(e) => setLembrar(e.target.checked)}
                    className="w-5 h-5 accent-white"
                  />
                  Permanecer conectado
                </label>

                <a href="#" className="text-sm hover:underline">
                  Esqueci minha senha
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-semibold text-lg py-4 rounded-2xl hover:bg-blue-50 transition-all"
              >
                Entrar
              </button>
            </form>
          </div>

          <div className="text-center text-xs text-blue-200 mt-12 space-y-1">
            <p>SIGD-FUSSTA • Sistema Integrado de Gestão de Doações</p>
            <p>Desenvolvido para o Fundo Social de Taubaté</p>
            <p>Versão 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;