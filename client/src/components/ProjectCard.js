import React from "react";

function ProjectCard(props) {
  const { title, pageLink, imgLink, description, skills, repoLink } = props;
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <h2 className="card-header h3">{title}</h2>
        {pageLink ? (
          <a
            id="cardTitle"
            className="card-link"
            href={pageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imgLink}
              className="img"
              alt="placehold"
              style={{ width: "100%" }}
            />
          </a>
        ) : (
          <div id="cardTitle" className="card-link">
            <img
              src={imgLink}
              className="img"
              alt="placehold"
              style={{ width: "100%" }}
            />
          </div>
        )}
        <div className="card-body pb-0">{description}</div>
        {pageLink && <div className="card-link"><span>Site:</span> {pageLink}</div>}
        <div className="card-subtitle mb-2 text-muted p-2">{skills}</div>
        <div className="card-footer" style={{ zIndex: "1" }}>
          <a
            className="card-link"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the repo at <span>{repoLink}</span>
          </a>
        </div>
      </div>
      ;
    </div>
  );
}

export default ProjectCard;
