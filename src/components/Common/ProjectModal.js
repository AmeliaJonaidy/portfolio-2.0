import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ProjectModalStyles.css';

function ProjectModal({ show, onHide, project }) {
    if (!project) return null;

    return (
        <Modal show={show} onHide={onHide} size="lg" className="project-modal">
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="project-modal-body">
                {/* Summary */}
                <div className="modal-section">
                    <h4>Overview</h4>
                    {Array.isArray(project.summary) ? (
                        project.summary.map((para, idx) => (
                            <p key={idx} className="modal-text">{para}</p>
                        ))
                    ) : (
                        <p className="modal-text">{project.summary}</p>
                    )}
                </div>

                {/* Technologies */}
                {project.technologies && (
                    <div className="modal-section">
                        <h4>Technologies Used</h4>
                        <div className="tech-tags">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Features */}
                {project.features && (
                    <div className="modal-section">
                        <h4>Features</h4>
                        <ul className="features-list">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Target Audience */}
                {project.targetAudience && (
                    <div className="modal-section">
                        <h4>Target Audience</h4>
                        <p className="modal-text">{project.targetAudience}</p>
                    </div>
                )}

                {/* Challenges */}
                {project.challenges && (
                    <div className="modal-section">
                        <h4>Challenges Faced</h4>
                        <ul className="challenges-list">
                            {project.challenges.map((challenge, idx) => (
                                <li key={idx}>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Learnings */}
                {project.learnings && (
                    <div className="modal-section">
                        <h4>Learning Outcomes</h4>
                        <ul className="learnings-list">
                            {project.learnings.map((learning, idx) => (
                                <li key={idx}>{learning}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Future Improvements */}
                {project.futureImprovements && (
                    <div className="modal-section">
                        <h4>Future Improvements</h4>
                        <ul className="improvements-list">
                            {project.futureImprovements.map((improvement, idx) => (
                                <li key={idx}>{improvement}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tools (For Design Projects) */}
                {project.tools && (
                    <div className="modal-section">
                        <h4>Tools Used</h4>
                        <div className="tech-tags">
                            {project.tools.map((tool, idx) => (
                                <span key={idx} className="tech-badge">{tool}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Role */}
                {project.role && (
                    <div className="modal-section">
                        <h4>My Role</h4>
                        <p className="modal-text modal-role">{project.role}</p>
                    </div>
                )}

                {/* Video */}
                {project.videoId && (
                    <div className="modal-section">
                        <h4>Demo Video</h4>
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${project.videoId}`}
                            title={`${project.title} Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="project-video-modal"
                        ></iframe>
                    </div>
                )}

                {/* Live Link */}
                {project.liveLink && (
                    <div className="modal-section">
                        <h4>Live Site</h4>
                        <p>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                                Visit Live Site →
                            </a>
                        </p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectModal;
