import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer, 
  Eye, 
  MapPin,
  Calendar,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

const WeatherDashboard = () => {
  const [currentLocation, setCurrentLocation] = useState("Lagos, Nigeria");
  const [weatherData, setWeatherData] = useState({
    current: {
      temperature: 32,
      humidity: 78,
      windSpeed: 12,
      visibility: 10,
      condition: "Partly Cloudy",
      icon: "partly-cloudy",
      rainfall: 0,
      pressure: 1013
    },
    forecast: [
      { day: "Today", high: 32, low: 24, condition: "Partly Cloudy", icon: "partly-cloudy", rain: 20 },
      { day: "Tomorrow", high: 29, low: 22, condition: "Rainy", icon: "rainy", rain: 80 },
      { day: "Wednesday", high: 31, low: 23, condition: "Sunny", icon: "sunny", rain: 0 },
      { day: "Thursday", high: 30, low: 25, condition: "Cloudy", icon: "cloudy", rain: 40 },
      { day: "Friday", high: 28, low: 21, condition: "Heavy Rain", icon: "heavy-rain", rain: 90 },
    ]
  });

  const farmingRecommendations = [
    {
      title: "Irrigation Advisory",
      message: "Heavy rainfall expected tomorrow. Reduce watering for outdoor crops.",
      priority: "high",
      icon: CloudRain,
      action: "Adjust irrigation schedule"
    },
    {
      title: "Harvest Window",
      message: "Clear weather Wednesday-Thursday. Ideal for harvesting mature crops.",
      priority: "medium", 
      icon: Sun,
      action: "Plan harvest activities"
    },
    {
      title: "Disease Alert",
      message: "High humidity may increase fungal disease risk. Monitor crops closely.",
      priority: "high",
      icon: AlertTriangle,
      action: "Apply preventive treatment"
    },
    {
      title: "Planting Conditions",
      message: "Soil moisture will be optimal after tomorrow's rain for new plantings.",
      priority: "medium",
      icon: TrendingUp,
      action: "Prepare seedlings"
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case "partly-cloudy":
        return <Cloud className="w-8 h-8 text-blue-400" />;
      case "cloudy":
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case "rainy":
        return <CloudRain className="w-8 h-8 text-blue-600" />;
      case "heavy-rain":
        return <CloudRain className="w-8 h-8 text-blue-800" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "low":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smart Weather Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get real-time weather data and AI-powered farming recommendations tailored to Nigerian agriculture.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Current Weather */}
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">{currentLocation}</h3>
              </div>
              <Button variant="outline" size="sm">
                Change Location
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Weather Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  {getWeatherIcon(weatherData.current.icon)}
                  <div>
                    <div className="text-4xl font-bold text-foreground">
                      {weatherData.current.temperature}°C
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {weatherData.current.condition}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Humidity</div>
                      <div className="font-semibold">{weatherData.current.humidity}%</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Wind className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Wind Speed</div>
                      <div className="font-semibold">{weatherData.current.windSpeed} km/h</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Eye className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Visibility</div>
                      <div className="font-semibold">{weatherData.current.visibility} km</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Pressure</div>
                      <div className="font-semibold">{weatherData.current.pressure} hPa</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Day Forecast */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">5-Day Forecast</h4>
                <div className="space-y-3">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="flex items-center space-x-3">
                        {getWeatherIcon(day.icon)}
                        <div>
                          <div className="font-medium">{day.day}</div>
                          <div className="text-sm text-muted-foreground">{day.condition}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{day.high}°/{day.low}°</div>
                        <div className="text-sm text-blue-600">{day.rain}% rain</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Farming Recommendations */}
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">AI Farming Recommendations</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {farmingRecommendations.map((rec, index) => (
                <Card key={index} className={`p-6 border ${getPriorityColor(rec.priority)}`}>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-current/10 rounded-lg">
                      <rec.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{rec.title}</h4>
                          <Badge variant={rec.priority === "high" ? "destructive" : rec.priority === "medium" ? "default" : "secondary"} className="text-xs">
                            {rec.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm opacity-90">{rec.message}</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-current text-current hover:bg-current/10">
                        {rec.action}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Weather Alerts */}
          <Card className="p-6 bg-warning/5 border-warning/20">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-warning" />
              <h3 className="text-lg font-semibold text-warning">Weather Alerts</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-warning">Heavy Rainfall Warning</p>
                  <p className="text-sm text-muted-foreground">Expected 50-80mm rainfall tomorrow. Secure loose equipment and check drainage systems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-success">Favorable Conditions</p>
                  <p className="text-sm text-muted-foreground">Ideal weather for outdoor farm work on Wednesday and Thursday.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherDashboard;