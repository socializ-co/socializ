'use client';

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings,
  Users,
  Zap,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Audience', icon: Users },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Content', icon: FileText },
];

const recentPosts = [
  {
    title: 'Building a calmer product workflow',
    status: 'Published',
    views: '12,480',
    date: 'Today',
  },
  {
    title: 'The future of community-led growth',
    status: 'Scheduled',
    views: '—',
    date: 'Tomorrow',
  },
  {
    title: 'Notes from our design system refresh',
    status: 'Published',
    views: '8,214',
    date: 'May 24',
  },
];

export default function Home() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <aside className="hidden border-r bg-card lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex h-16 items-center gap-2 px-6">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-4" />
          </div>
          <span className="font-semibold tracking-tight">Socializ</span>
        </div>

        <Separator />

        <div className="flex-1 space-y-6 p-4">
          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-muted-foreground">
              Workspace
            </p>
            <div className="mt-2 flex items-center justify-between rounded-lg border bg-muted/50 p-2">
              <div className="flex min-w-0 items-center gap-2">
                <Avatar className="size-7 rounded-md">
                  <AvatarFallback className="rounded-md bg-primary/10 text-xs text-primary">
                    S
                  </AvatarFallback>
                </Avatar>
                <span className="truncate text-sm font-medium">
                  Socializ Team
                </span>
              </div>
              <ChevronDown className="size-4 text-muted-foreground" />
            </div>
          </div>

          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon, active }) => (
              <Button
                key={label}
                variant={active ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start gap-3',
                  active && 'font-semibold',
                )}
              >
                <Icon className="size-4" />
                {label}
              </Button>
            ))}
          </nav>

          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-muted-foreground">
              Manage
            </p>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="size-4" />
              Settings
            </Button>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <Card className="border-primary/20 bg-primary/5 shadow-none">
            <CardHeader className="gap-2 p-4">
              <CardTitle className="text-sm">Grow with Socializ</CardTitle>
              <CardDescription className="text-xs">
                Unlock deeper insights and unlimited posts.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button size="sm" className="w-full">
                Upgrade plan
              </Button>
            </CardContent>
          </Card>
          <div className="flex items-center gap-2 rounded-lg p-1">
            <Avatar className="size-7">
              <AvatarImage
                src="https://i.pravatar.cc/80?img=12"
                alt="Alex Morgan"
              />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Alex Morgan</p>
              <p className="truncate text-xs text-muted-foreground">
                alex@socializ.dev
              </p>
            </div>
            <div className="flex items-center gap-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>

      <main className="lg:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Good morning, Alex
              </h1>
              <p className="hidden text-sm text-muted-foreground sm:block">
                Here&apos;s what&apos;s happening with your community.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden w-56 md:block">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search" />
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label="Search"
              className="md:hidden"
            >
              <Search className="size-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Notifications">
              <Bell className="size-4" />
            </Button>
            <Avatar className="size-8">
              <AvatarImage
                src="https://i.pravatar.cc/80?img=12"
                alt="Alex Morgan"
              />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">
          <Card className="overflow-hidden border-0 bg-primary text-primary-foreground shadow-sm">
            <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Activity className="mr-1 size-3" />
                  Weekly snapshot
                </Badge>
                <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                  Your community is moving in the right direction.
                </h2>
                <p className="max-w-xl text-sm text-primary-foreground/75">
                  Engagement is up 24% this week. Keep sharing the ideas that
                  bring people together.
                </p>
              </div>
              <Button variant="secondary" className="w-fit gap-2" asChild>
                <a href="#report">
                  View report <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: 'Total audience',
                value: '24,892',
                change: '+12.5%',
                icon: Users,
              },
              {
                label: 'Engagement rate',
                value: '68.4%',
                change: '+8.2%',
                icon: Activity,
              },
              {
                label: 'Published posts',
                value: '184',
                change: '+14 this month',
                icon: FileText,
              },
              {
                label: 'Active campaigns',
                value: '06',
                change: '2 ending soon',
                icon: Zap,
              },
            ].map(({ label, value, change, icon: Icon }) => (
              <Card key={label}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardDescription>{label}</CardDescription>
                  <Icon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold tracking-tight">
                    {value}
                  </div>
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    {change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
            <Card id="report">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Recent posts</CardTitle>
                  <CardDescription>
                    Track the latest content from your team.
                  </CardDescription>
                </div>
                <Button size="sm" className="gap-2">
                  <Plus className="size-4" /> New post
                </Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All posts</TabsTrigger>
                    <TabsTrigger value="published">Published</TabsTrigger>
                    <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Views</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPosts.map((post) => (
                      <TableRow key={post.title}>
                        <TableCell className="max-w-56 truncate font-medium">
                          {post.title}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              post.status === 'Published'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {post.views}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {post.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audience growth</CardTitle>
                <CardDescription>
                  Monthly progress toward your next milestone.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight">
                      24,892
                    </p>
                    <p className="text-sm text-muted-foreground">
                      of 30,000 members
                    </p>
                  </div>
                  <Badge variant="secondary">82.9%</Badge>
                </div>
                <Progress value={82.9} />
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Weekly goal reached</p>
                      <p className="text-xs text-muted-foreground">
                        +2,408 new members
                      </p>
                    </div>
                    <span className="text-sm font-medium">+10.7%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Users className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Next milestone</p>
                      <p className="text-xs text-muted-foreground">
                        5,108 members to go
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="View milestone"
                    >
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
