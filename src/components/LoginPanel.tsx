
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoleCard from "./RoleCard";
import { User, Building2, HeartHandshake, Users, UserCog, LogIn, UserPlus } from "lucide-react";

const roles = [
  {
    id: "victim",
    title: "Victim",
    icon: <User size={20} />,
    description: "Request assistance, report needs, and connect with relief services during flood emergencies."
  },
  {
    id: "ngo",
    title: "NGO",
    icon: <Building2 size={20} />,
    description: "Coordinate relief efforts, manage resources, and connect with victims and volunteers."
  },
  {
    id: "volunteer",
    title: "Volunteer",
    icon: <HeartHandshake size={20} />,
    description: "Offer your skills and time to help communities affected by floods and support relief operations."
  },
  {
    id: "fundraiser",
    title: "Fundraiser",
    icon: <Users size={20} />,
    description: "Organize campaigns and raise funds to support flood relief efforts and affected communities."
  },
  {
    id: "admin",
    title: "Admin",
    icon: <UserCog size={20} />,
    description: "Manage the platform, users, and resources to ensure effective coordination of relief efforts."
  }
];

const LoginPanel = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  const handleSelectRole = (roleId: string) => {
    setSelectedRole(roleId);
  };
  
  const handleBackToRoles = () => {
    setSelectedRole(null);
  };

  return (
    <Card className="w-full max-w-4xl shadow-lg border-primary/10">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          {selectedRole ? `Sign in as ${roles.find(r => r.id === selectedRole)?.title}` : "Choose Your Role"}
        </CardTitle>
        <CardDescription className="text-center">
          {selectedRole 
            ? `Access the FloodAid platform as a ${roles.find(r => r.id === selectedRole)?.title.toLowerCase()}`
            : "Select how you'd like to contribute to the flood relief efforts"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        {selectedRole ? (
          <div className="animate-fade-in">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full gap-2">
                  <LogIn size={16} />
                  Login
                </Button>
              </TabsContent>

              <TabsContent value="register" className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="registerEmail" placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="registerPassword" type="password" />
                </div>
                <Button className="w-full gap-2">
                  <UserPlus size={16} />
                  Register
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Button variant="link" onClick={handleBackToRoles}>
                Back to role selection
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                title={role.title}
                description={role.description}
                icon={role.icon}
                onClick={() => handleSelectRole(role.id)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LoginPanel;
