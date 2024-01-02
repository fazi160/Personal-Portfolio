import './Projects.css';
import ProjectThreeImage from '../../assets/images/NetFlix.png';
import ProjectfourImage from '../../assets/images/Olx.png';
import worknestImage from '../../assets/images/worknest.png'
import mollaImage from '../../assets/images/molla books.png'
import parkerImage from '../../assets/images/parker.png'
import {useMemo} from "react";
import {Project as ProjectType} from "../../Types/Project.ts";
import {Project} from  "../";

export const Projects= () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [
        {
            title: 'WorkNest',
            subtitle: 'A space for lending out co-working and conference ',
            description: " In this Project Used Django, React, JWT, PSQL, HTML, Tailwind, AWS  It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",

            github: 'https://github.com/fazi160/Work-Nest-frontend',
            github2:'https://github.com/fazi160/Work-Nest-backend',
            website: 'https://worknest.vercel.app/',
            image: worknestImage,
            techStack: ['React', 'Django', 'PostgreSQL', 'Docker', 'Nginx','Ajax', 'CSS']
        },
        {
            title: 'Molla Books',
            subtitle: 'A e-commerce website for Books',
            description: "In This Project i Used Django, Html, Css, Bootstrap",

            github: 'https://github.com/fazi160/Molla_Ecom',
            github2:'',
            website: '',
            image:mollaImage, 
            techStack: ['React','firebase','axios','redux']
        },
        {
            title: 'Netflix',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: 'https://github.com/fazi160/netflix',
            github2:'',
            website: '',
            image:ProjectThreeImage, 
            techStack: ['React','firebase','axios','redux']
        },{
            title: 'Olx',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: 'https://github.com/fazi160/olx_clone',
            github2:'',
            website: '',
            image:ProjectfourImage, 
            techStack: ['React','firebase','axios','redux']
        },{
            title: 'Parker Pen',
            subtitle: 'Responsive Template',
            description: "Responsive Template Used HTML and CSS",

            github: 'https://github.com/fazi160/parker',
            github2:'',
            website: 'fazi160.github.io/parker/',
            image: parkerImage,
            techStack: ['HTML', 'CSS']
        }
    ], []);

    return (
        <section id={'projects'} className={'projects container'}>
            <div className={'projects__header'}>
                <p className={'projects__heading'}>Projects</p>
                <p className={'projects__subheading'}>Works, I'm most proud of</p>
            </div>
            <div className={'projects__list'}>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </section>
    );
};