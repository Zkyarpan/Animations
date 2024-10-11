import Header from './Header';
import Form from './Form';

export default function Home() {
  return (
    <div className="max-w-142 min-h-screen max-w-[500px] mx-auto flex flex-col gap-16 relative">
      <Header />
      <div className="flex flex-col gap-20 px-4">
        <div className="text-center">
          <h1 className="text-gray-gray1k font-normal text-4xl italic">
            The Professional Network to show & tell what you are working on!
          </h1>
          <h2 className="text-gray-gray7 font-normal text-lg">
            <button>Showcase your work,</button>
            <button>launch side projects,</button>
            <button>find jobs,</button> and connect with the most (in)credible people.
          </h2>
        </div>
        <Form />
      </div>
    </div>
  );
}
