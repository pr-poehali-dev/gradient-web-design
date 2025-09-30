import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const events = [
    {
      title: 'Форум молодых лидеров',
      date: '15 мая 2024',
      location: 'Нижний Новгород',
      image: '/img/04523d20-68c9-4b2e-bd4c-acbcc52b4310.jpg',
      description: 'Встреча талантливой молодежи региона'
    },
    {
      title: 'Конференция инноваций',
      date: '22 июня 2024',
      location: 'Нижний Новгород',
      image: '/img/8553db3b-b2e5-4710-b96e-afcf40a34c66.jpg',
      description: 'Обсуждение перспективных проектов'
    },
    {
      title: 'Студенческий саммит',
      date: '10 июля 2024',
      location: 'Нижний Новгород',
      image: '/img/dcba42bd-b83c-4237-bb64-7a74f71286cf.jpg',
      description: 'Платформа для обмена опытом'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О проекте' },
    { id: 'projects', label: 'Проекты' },
    { id: 'events', label: 'Мероприятия' },
    { id: 'news', label: 'Новости' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-1 flex items-center justify-center text-white font-bold text-xl">
              МД
            </div>
            <span className="font-bold text-lg text-gray-900">Молодежь и дети</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Button className="gradient-1 text-white hover:opacity-90">
            Регистрация
          </Button>
        </div>
      </header>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
          <Icon name="Share2" size={18} />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
          <Icon name="Send" size={18} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
          <Icon name="Youtube" size={18} />
        </a>
      </div>

      <section id="hero" className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Национальный проект{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  «Молодежь и дети»
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Развиваем талантливую молодежь Нижегородской области. Воспитываем лидеров с высокими моральными принципами и социальной ответственностью.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="gradient-1 text-white hover:opacity-90 transition-all hover:scale-105"
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  Участвовать
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/04523d20-68c9-4b2e-bd4c-acbcc52b4310.jpg" 
                alt="Молодежь и дети"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">О проекте</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Национальный проект направлен на достижение целей развития РФ до 2030 и 2036 года
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Воспитание лидеров',
                description: 'Развиваем всесторонне развитых людей, любящих свою страну',
                gradient: 'gradient-1'
              },
              {
                icon: 'GraduationCap',
                title: 'Образование',
                description: 'Обновление образовательной инфраструктуры и поддержка учителей',
                gradient: 'gradient-2'
              },
              {
                icon: 'Lightbulb',
                title: 'Инновации',
                description: 'Вовлечение молодежи в научные исследования и проекты',
                gradient: 'gradient-4'
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${item.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Инициативные проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Молодые профессионалы', status: 'Активен', color: 'bg-green-500' },
              { title: 'Студенческие стартапы', status: 'Активен', color: 'bg-green-500' },
              { title: 'Наставничество', status: 'В разработке', color: 'bg-yellow-500' },
              { title: 'Культурный обмен', status: 'Активен', color: 'bg-green-500' },
              { title: 'Спортивная инициатива', status: 'Планируется', color: 'bg-blue-500' },
              { title: 'Научные кружки', status: 'Активен', color: 'bg-green-500' }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <span className={`w-3 h-3 rounded-full ${project.color}`}></span>
                  </div>
                  <CardDescription>{project.status}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Предстоящие мероприятия</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={index} className="min-w-full">
                    <div className="relative h-[500px]">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                        <p className="text-lg mb-4">{event.description}</p>
                        <div className="flex items-center gap-6 text-sm">
                          <span className="flex items-center gap-2">
                            <Icon name="Calendar" size={16} />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Icon name="MapPin" size={16} />
                            {event.location}
                          </span>
                        </div>
                        <Button 
                          className="mt-6 bg-white text-primary hover:bg-white/90"
                          onClick={() => setIsRegistrationOpen(true)}
                        >
                          Зарегистрироваться
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Новости проекта</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { date: '5 мая 2024', title: 'Запуск нового направления', excerpt: 'Национальный проект расширяет программы поддержки молодежи...' },
              { date: '28 апр 2024', title: 'Успехи участников', excerpt: 'Более 10 000 молодых людей приняли участие в проектах...' },
              { date: '15 апр 2024', title: 'Открытие центров', excerpt: 'В регионе открылись 5 новых молодежных центров развития...' }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer group overflow-hidden">
                <div className="h-48 gradient-4"></div>
                <CardHeader>
                  <CardDescription className="text-xs text-gray-500">{news.date}</CardDescription>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{news.excerpt}</p>
                  <Button variant="link" className="px-0 mt-2 text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты и обратная связь</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-white/80">г. Нижний Новгород, ул. Примерная, 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-white/80">+7 (831) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/80">info@molodezh-nn.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Обратная связь</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Сообщение</Label>
                    <Input id="message" placeholder="Ваше сообщение" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Отправить
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Национальный проект «Молодежь и дети». Нижегородская область</p>
        </div>
      </footer>

      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Регистрация на мероприятие</DialogTitle>
            <DialogDescription>
              Заполните форму для участия в мероприятии
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div>
              <Label htmlFor="reg-name">Имя</Label>
              <Input id="reg-name" placeholder="Ваше имя" />
            </div>
            <div>
              <Label htmlFor="reg-email">Email</Label>
              <Input id="reg-email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="reg-phone">Телефон</Label>
              <Input id="reg-phone" placeholder="+7 (999) 123-45-67" />
            </div>
            <div>
              <Label htmlFor="reg-age">Возраст</Label>
              <Input id="reg-age" type="number" placeholder="18" />
            </div>
            <Button className="w-full gradient-1 text-white" type="submit">
              Зарегистрироваться
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;