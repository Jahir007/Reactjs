import React from "react";

const Owner = () => {
    return (
        <div className="container-fluid px-4">
            <h1 classNameName="mt-4">Add Owner</h1>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                </li>
            </ul>

            <form onSubmit={submitOwner}>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>

                    <div className="form-group mb-3">
                        <label>Slug</label>
                        <input type="text" name="slug" className="form-control" ></input>
                    </div>
                    <div className="form-group mb-3">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" ></input>
                    </div>
                    <div className="form-group mb-3">
                        <label>Descriptions</label>
                        <textarea name="descrption" className="form-control" ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <input type="checkbox" name="status" />
                    </div>

                    <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="profile-tab">

                        <div className="form-group mb-3">
                            <label>Meta title</label>
                            <input type="text" name="meta_title" className="form-control" ></input>
                        </div>
                        <div className="form-group mb-3">
                            <label>Meta Keywords</label>
                            <textarea name="meta_keyword" className="form-control" ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label>Meta Descriptions</label>
                            <textarea name="meta_descrption" className="form-control" ></textarea>
                        </div>

                    </div>
                </div>

                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
            </form>
        </div>
    )
}

export default Owner;