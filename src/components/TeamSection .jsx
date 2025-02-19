


const teamMembers = [
    {
      name: "Mohd Hssan",
      role: "Frontend Developer",
      image: myimg,
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      image: myimg,
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
    {
      name: "Alice Brown",
      role: "AI & Security Engineer",
      image: myimg,
      linkedin: "https://linkedin.com/in/alicebrown",
      github: "https://github.com/alicebrown",
    },
  ];
  import { myimg } from "../assets";
  const TeamSection = () => {
    return (
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
  
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg text-center w-40 shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-16 h-16 mx-auto rounded-full border-2 border-blue-400"
                />
                <h3 className="text-sm font-semibold mt-2">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
                
                <div className="mt-2 flex justify-center gap-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:text-blue-600">
                    🔗 LinkedIn
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-white">
                    🐙 GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;
  