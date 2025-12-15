// data.js
export const skills = {
    languages: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    frameworks: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/springboot.svg" },
      { name: "Spring MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },  
      { name: "Spring JPA", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spring.svg"},
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    databases: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Oracle SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Gradle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Elasticsearch", icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ]
};


export const projects = [
    {
        title: "Hotel Booking System",
        icon: "server", // Lucide icon name
        iconColor: "text-blue-400",
        tags: ["Spring Boot", "RBAC", "Performance"],
        tagColor: "blue",
        desc: "A comprehensive RESTful application featuring room filtering, booking management, and price calculation. Implemented <strong>Role-Based Access Control (RBAC)</strong> using Spring Security and optimized query performance resulting in a <strong>25% reduction</strong> in response times.",
        linkText: "View Details",
        linkColor: "text-blue-400 hover:text-blue-300"
    },
    {
        title: "E-commerce Web App",
        icon: "database",
        iconColor: "text-green-400",
        tags: ["Java Fullstack", "JWT", "MySQL"],
        tagColor: "green",
        desc: "Full-stack application built with Spring Boot and React. Features advanced filtering and cart management. Implemented <strong>JWT Security</strong> protecting 95% of sensitive operations and achieved a <strong>40% increase</strong> in transaction completion rates.",
        linkText: "View Details",
        linkColor: "text-green-400 hover:text-green-300"
    }
];


export const experience = [
    {
        role: "Software Development Engineer",
        company: "Ivy Comptech (Entain)",
        period: "Aug 2022 – Nov 2024",
        achievements: [
            "Engineered high-performance <strong>User Management and Game State microservices</strong> handling <span class='text-slate-900 font-medium'>1,000+ transactions per second</span>.",
            "Integrated third-party vendor games, reducing integration time by <strong>20%</strong> and enhancing user retention.",
            "Designed end-to-end RESTful APIs for core features like age restriction compliance and free spins.",
            "Diagnosed production issues leading to a <strong>30% improvement</strong> in system stability.",
            "Reduced lobby configuration time by <strong>15%</strong> through improved configuration management."
        ]
    }
];