
import { useState, useEffect } from 'react';
import { Chess, School, Trophy, Star, Crown, Book, Award, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  
  const chessAchievements = [
    "State Champion U-13 (2024)",
    "National Tournament Finalist (2023)",
    "Regional Chess Master Rating 2100+",
    "School Chess Team Captain",
    "Defeated 3 Grandmasters in Simuls"
  ];

  const academicAchievements = [
    "School Valedictorian (Grade 8)",
    "Mathematics Olympiad Gold Medal",
    "Science Fair Regional Winner",
    "Honor Roll - 4 Consecutive Years",
    "Academic Excellence Award 2024"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % chessAchievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Chess className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Alex Chen</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#chess" className="hover:text-yellow-400 transition-colors">Chess</a>
            <a href="#academics" className="hover:text-yellow-400 transition-colors">Academics</a>
            <a href="#achievements" className="hover:text-yellow-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Alex Chen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Chess Prodigy • Academic Excellence • Age 13
            </p>
            <div className="h-16 flex items-center justify-center">
              <p className="text-lg text-yellow-400 animate-fade-in">
                {chessAchievements[currentAchievement]}
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              View Chess Games
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Academic Portfolio
            </Button>
          </div>
        </div>

        {/* Floating Chess Pieces */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce text-6xl opacity-20">♔</div>
          <div className="absolute top-40 right-20 animate-bounce text-4xl opacity-20" style={{animationDelay: '1s'}}>♕</div>
          <div className="absolute bottom-20 left-20 animate-bounce text-5xl opacity-20" style={{animationDelay: '2s'}}>♖</div>
          <div className="absolute bottom-40 right-10 animate-bounce text-4xl opacity-20" style={{animationDelay: '0.5s'}}>♗</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-8xl">
                🏆
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                At just 13 years old, I've already achieved remarkable success in both chess and academics. 
                My journey began at age 6 when I first learned to play chess, and since then, I've been 
                pursuing excellence in every aspect of my life.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently maintaining a 2100+ chess rating while being the top student in my grade, 
                I believe that the strategic thinking required in chess complements my academic pursuits 
                perfectly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-yellow-500 text-black">Chess Master</Badge>
                <Badge className="bg-blue-500">Honor Student</Badge>
                <Badge className="bg-green-500">Team Captain</Badge>
                <Badge className="bg-purple-500">Math Olympiad</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chess Section */}
      <section id="chess" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Chess Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-400">
                  <Trophy className="mr-2" />
                  Current Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">2154</div>
                <p className="text-gray-400">USCF Rated</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-400">
                  <Crown className="mr-2" />
                  Tournaments Won
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">23</div>
                <p className="text-gray-400">In the last 2 years</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-400">
                  <Star className="mr-2" />
                  Best Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-white mb-2">State Champion</div>
                <p className="text-gray-400">U-13 Division 2024</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Recent Tournament Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { event: "National Scholastic Championship", result: "2nd Place", date: "March 2024" },
                { event: "State Youth Championship", result: "1st Place", date: "February 2024" },
                { event: "Regional Masters Tournament", result: "3rd Place", date: "January 2024" },
                { event: "Winter Classic Open", result: "1st Place", date: "December 2023" }
              ].map((tournament, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white">{tournament.event}</h4>
                        <p className="text-yellow-400 font-bold">{tournament.result}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{tournament.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Academic Excellence</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <School className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">4.0</div>
                <p className="text-gray-400">GPA</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">15</div>
                <p className="text-gray-400">Academic Awards</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <Book className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">1st</div>
                <p className="text-gray-400">Class Rank</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">99th</div>
                <p className="text-gray-400">Percentile</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">Favorite Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Mathematics (Advanced Algebra)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                    Computer Science
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                    Physics
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                    Literature
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">Recent Academic Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {academicAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-3" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="achievements" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Achievement Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2024", title: "State Chess Champion U-13", description: "Won the state championship with a perfect 7-0 score", type: "chess" },
                { year: "2024", title: "Academic Excellence Award", description: "Recognized for maintaining 4.0 GPA while competing nationally", type: "academic" },
                { year: "2023", title: "Mathematics Olympiad Gold", description: "Placed 1st in regional mathematics competition", type: "academic" },
                { year: "2023", title: "National Chess Tournament Finalist", description: "Reached finals of National Scholastic Championship", type: "chess" },
                { year: "2022", title: "Chess Master Rating Achieved", description: "Became youngest player in state to reach 2100+ rating", type: "chess" },
                { year: "2021", title: "Honor Roll Achievement", description: "First of four consecutive years on honor roll", type: "academic" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'chess' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}>
                      {item.type === 'chess' ? <Chess className="w-6 h-6 text-black" /> : <School className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-sm text-gray-400 font-mono">{item.year}</span>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-400">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              Interested in chess coaching, academic tutoring, or just want to connect? 
              Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <p className="text-white">alex.chen.chess@email.com</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <p className="text-white">Available for chess lessons</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <p className="text-white">San Francisco, CA</p>
                </CardContent>
              </Card>
            </div>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              Schedule a Chess Game
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Chess className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold">Alex Chen</span>
          </div>
          <p className="text-gray-400">Chess Prodigy • Academic Excellence • Future Grandmaster</p>
          <p className="text-gray-500 text-sm mt-2">© 2024 Alex Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
