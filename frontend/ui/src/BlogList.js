import{Link} from 'react-router-dom'
const BlogList = ({project,teams,title}) => {
    // const blogs=props.blogs
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {project.map((proj)=>(
                <div className="blog-preview" key={proj.proj_id}>
                    <Link to={`/my_project_api/${proj.proj_id}`}>
                        <h2>Project Name: {proj.proj_name}</h2>
                        <p>Manager: {proj.manager_name}</p>
                    </Link>
                </div>
            ))}
            
        </div>
    );
}
export default BlogList;