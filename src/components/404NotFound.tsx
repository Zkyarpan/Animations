import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-row justify-center w-full md:min-w-[960px] min-h-[600px] relative dark:bg-neutral-950 p-6">
      {/* Large 404 Background Text */}
      <div className="text-center">
        <div className="absolute top-0 left-0 z-0 w-full leading-[600px] text-center text-transparent bg-clip-text text-[400px] opacity-30 bg-gradient-to-r from-neutral-400 to-neutral-600 font-bold">
          404
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full dark:bg-[radial-gradient(circle,rgba(36,36,66,0.3)_2%,rgba(2,2,15,1)_80%)] bg-[radial-gradient(circle,rgba(224,224,232,0.3)_2%,rgba(247,247,250,1)_80%)]" />

        {/* Content Container */}
        <div className="flex flex-col gap-3 h-full justify-center">
          <div className="grow" />
          
          {/* Main Content */}
          <div className="text-neutral-900 dark:text-neutral-50 z-10 relative font-bold text-5xl">
            We lost this page
          </div>
          
          <div className="text-neutral-600 dark:text-neutral-400 opacity-80 z-10 relative">
            The page you are looking for doesn't exist or has been moved.
          </div>

          {/* Search Input */}
          <div className="relative z-10 max-w-md mx-auto w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input 
                placeholder="Search our site..." 
                className="pl-10 w-full bg-white dark:bg-neutral-900"
              />
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="grow flex flex-col justify-center">
            <Button 
              className="z-10 mx-auto relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold flex items-center gap-2 group transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;