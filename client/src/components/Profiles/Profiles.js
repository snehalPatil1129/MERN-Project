import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Spinner from "../layout/spinner";
import {getProfiles} from "../../store/actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = ({ profile: {profiles, loading}, getProfiles}) => {

    useEffect(() => {
        getProfiles();
    },[getProfiles]);

    return ( 
        <Fragment>
            {
                loading ? <Spinner/> :
                <Fragment>
                    <h1 className="large text-primary">Developers</h1>
                        <p className="lead">
                            <i className="fab fa-connectdevelop"></i> Browse and connect with developers
                        </p>
                        <div className="profiles">
                            {
                                profiles.length > 0 ? 
                                    profiles.map((profile) => (
                                        <ProfileItem key={profile._id} profile={profile} />
                                    ))
                                : <h4>No Profiles found</h4>
                            }
                        </div>
                </Fragment> 
            }
        </Fragment>
    )
}

Profiles.propTypes = {
    profile : PropTypes.object.isRequired,
    getProfiles : PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile : state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)
