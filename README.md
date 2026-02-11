# 🌟 Juliana Miranda Estética - Site Profissional

## 📋 Descrição do Projeto

Site profissional completo e moderno desenvolvido para **Juliana Miranda Estética**, empresa especializada em serviços de estética e cuidados com a beleza localizada em Farroupilha/RS. O site foi criado seguindo rigorosamente o briefing fornecido, com foco em transmitir credibilidade, sofisticação e profissionalismo.

## 🎯 Objetivos do Site

- ✅ Apresentar a clínica/empresa de estética de forma profissional
- ✅ Divulgar serviços estéticos especializados
- ✅ Fortalecer a imagem da profissional responsável
- ✅ Facilitar o contato e agendamento de serviços
- ✅ Valorizar resultados com seção de "Antes e Depois"
- ✅ Transmitir confiança, sofisticação, acolhimento e autoridade na área

## 🏗️ Estrutura do Site

### 1. **Página Inicial (Home)**
- Banner principal com imagem impactante
- Frase de impacto: "Beleza, cuidado e confiança em cada detalhe"
- Botões de ação: Agende sua avaliação / Fale conosco
- Destaque dos principais serviços
- Diferenciais da clínica

### 2. **Sobre a Empresa**
- História da clínica
- Missão, visão e valores
- Texto institucional profissional

### 3. **Sobre a Profissional**
- Foto profissional (imagem de exemplo)
- Juliana Miranda - Esteticista
- Formação e especializações
- Texto humanizado e profissional

### 4. **Serviços Prestados**
- **Design de Sobrancelhas**: Modelagem personalizada
- **Lash Lifting**: Curvatura natural dos cílios
- **Brow Lamination**: Design e fixação dos fios
- **Epilação Egípcia**: Técnica milenar natural

### 5. **Antes e Depois**
- Galeria de imagens com resultados
- Layout elegante e responsivo
- Aviso de responsabilidade sobre resultados variados

### 6. **Depoimentos**
- Cards de depoimentos fictícios para exemplo
- Avaliações com estrelas
- Textos realistas e profissionais

### 7. **Contato**
- Formulário de contato completo
- Botão para WhatsApp
- Endereço, horário de funcionamento
- Informações de localização

### 8. **Rodapé**
- Informações da empresa (CNPJ, CNAE)
- Links rápidos
- Redes sociais
- Direitos autorais

## 🎨 Design e Experiência

### **Paleta de Cores**
- **Primária**: `#D4A574` (Dourado rosé - tom principal)
- **Secundária**: `#F8F5F0` (Off-white)
- **Neutros**: `#2C2C2C`, `#6B6B6B`, `#A0A0A0`
- **Branco**: `#FFFFFF`
- **Apoio**: Verde sucesso, vermelho erro, etc.

### **Tipografia**
- **Primária**: 'Playfair Display' - serif elegante
- **Secundária**: 'Inter' - sans-serif moderna

### **Características de Design**
- Layout totalmente responsivo
- Navegação simples e intuitiva
- Visual moderno, limpo e sofisticado
- Animações suaves e elegantes
- Botão WhatsApp flutuante

## ⚙️ Requisitos Técnicos

### **Frontend**
- HTML5 semântico e acessível
- CSS3 moderno com variáveis CSS
- JavaScript vanilla (ES6+)
- Font Awesome para ícones
- Google Fonts para tipografia

### **Responsividade**
- Mobile-first approach
- Breakpoints: 375px, 576px, 768px, 1024px, 1200px
- Compatível com todos os dispositivos modernos
- Suporte para telas com notch/safe-area

### **Performance**
- Imagens otimizadas e lazy loading
- Código limpo e organizado
- Animações otimizadas
- Suporte para preferência de movimento reduzido

## 📱 Funcionalidades Interativas

### **JavaScript**
- Menu mobile com animações
- Scroll suave entre seções
- Formulário de contato com validação
- Integração com WhatsApp
- Galeria de imagens com lightbox
- Animações ao scroll
- Notificações de sucesso/erro
- Contador de visitas (localStorage)

### **Formulário de Contato**
- Validação em tempo real
- Formatação automática de telefone
- Envio simulado (backend não implementado)
- Integração com WhatsApp
- Mensagens de feedback visual

## 📊 Informações da Empresa

### **Dados Cadastrais**
- **CNPJ**: 59.768.219/0001-88
- **Razão Social**: 59.768.219 Juliana Miranda de Paiva Paiz
- **CNAE**: 96.02-5-02 - Atividades de estética e outros serviços de cuidados com a beleza
- **Data de Abertura**: 06/03/2025
- **Porte**: Microempreendedor Individual (MEI)
- **Natureza Jurídica**: Empresário Individual

### **Contatos**
- **E-mail**: julianapaiva533@gmail.com
- **Telefone/WhatsApp**: (54) 99139-0263
- **Endereço**: Rua Rui Barbosa, 247, Centro - Farroupilha/RS
- **CEP**: 95170-440

### **Horário de Funcionamento**
- Terça a Sexta: 9h às 20h
- Sábado: 7h às 17h

## 🚀 Como Personalizar

### **1. Imagens**
Substitua as imagens de exemplo pelas imagens reais:
```html
<img src="sua-imagem-real.jpg" alt="Descrição da imagem">
```

### **2. Textos e Conteúdo**
Modifique os textos diretamente no HTML:
```html
<h2>Sua frase de impacto aqui</h2>
<p>Seu texto institucional aqui</p>
```

### **3. Cores da Marca**
Atualize as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-color: #SUA-COR-PRIMARIA;
    --secondary-color: #SUA-COR-SECUNDARIA;
}
```

### **4. Informações de Contato**
Altere em `js/main.js`:
```javascript
const CONFIG = {
    whatsappNumber: 'SEU-NUMERO-WHATSAPP',
    companyName: 'NOME DA SUA EMPRESA',
    email: 'seu-email@empresa.com',
    // ... outras configurações
};
```

### **5. Serviços**
Edite a seção de serviços no HTML:
```html
<div class="service-item">
    <h4>Nome do Serviço</h4>
    <p>Descrição do serviço</p>
    <span class="service-price">A partir de R$ 00,00</span>
</div>
```

## 📁 Estrutura de Arquivos

```
juliana-miranda-estetica/
├── index.html              # Página principal
├── css/
│   ├── style.css          # Estilos principais
│   └── responsive.css     # Estilos responsivos
├── js/
│   └── main.js            # JavaScript interativo
├── images/                # Imagens do site (criar pasta)
└── README.md              # Este arquivo
```

## 🌐 URLs e Endpoints

### **Páginas do Site**
- `/` - Página inicial (Home)
- `#sobre` - Sobre a empresa (âncora)
- `#profissional` - Sobre a profissional (âncora)
- `#servicos` - Serviços (âncora)
- `#antes-depois` - Galeria antes/depois (âncora)
- `#depoimentos` - Depoimentos (âncora)
- `#contato` - Página de contato (âncora)

### **Links Externos**
- WhatsApp: `https://wa.me/5554991390263?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação.`
- Email: `mailto:julianapaiva533@gmail.com`

## 🔧 Desenvolvimento Futuro

### **Funcionalidades Sugeridas**
1. **Backend Real**: Implementar envio real de formulários
2. **Agendamento Online**: Sistema de marcação de horários
3. **Blog**: Seção de artigos sobre estética
4. **Área do Cliente**: Login para clientes
5. **Pagamento Online**: Integração com gateways de pagamento
6. **Newsletter**: Sistema de email marketing
7. **SEO Avançado**: Otimização completa para motores de busca

### **Melhorias Técnicas**
- Implementar Progressive Web App (PWA)
- Adicionar análise de performance (Google Analytics)
- Sistema de cache para melhor performance
- Implementar Content Delivery Network (CDN)
- Adicionar testes automatizados

## 📞 Suporte

Para dúvidas sobre personalização ou desenvolvimento:
- **E-mail**: julianapaiva533@gmail.com
- **WhatsApp**: (54) 99139-0263

## 📄 Licença

Este projeto é desenvolvido sob medida para **Juliana Miranda Estética**. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para cuidar da sua beleza**

*Última atualização: Fevereiro 2026*