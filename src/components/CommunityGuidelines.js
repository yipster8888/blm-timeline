import React from "react";

import "../css/CommunityGuidelines.css";

function CommunityGuidelines() {
  return (
    <div className="community-guidelines">
      <h1>Community Guidelines</h1>
      <p>
        Our vision for the Black Lives Matter (BLM) Timeline is to document and
        display the achievements and progress of the BLM movement worldwide.
        While we recognize that the reality of this movement can at times be
        brutal, violent, and graphic, we have decided to curate content based on
        stories that show progress or inspire others to fight for the cause.{" "}
      </p>
      <p className="guidelines">
        In our efforts to meet this standard of content, we abide by the
        following community guidelines when evaluating what kind of posts are
        are allowed on the timeline:
      </p>
      <ul>
        <li>
          No graphic content/images - Articles containing graphic images or
          content will not be posted to the timeline.
        </li>
        <li>
          Relevant content only - Only articles pertaining to the development of
          the Black Lives Matter movement will be posted to the timeline.
        </li>
        <li>
          No hate speech - Articles containing hate speech (abusive or
          threatening speech or writing that expresses prejudice against a
          particular group) will not be posted to the timeline.
        </li>
        <li>
          Content that maintains a positive environment - The timeline will
          focus on progressive, positive, and inspiring events in the Black
          Lives Matter movement.
        </li>
        <li>
          Publicly available content - See the Fair Use Notice below for more
          information.
        </li>
      </ul>
      <p>
        By adhering to the Community Guidelines listed above, we are committed
        to bringing you content that will keep you informed about the progress
        of the movement and inspired to continue the fight for social justice
        and human rights.
      </p>
      <hr />
      <p className="disclaimer">
        FAIR USE NOTICE: This web application contains copyrighted material, the
        use of which has not always been explicitly authorized by the copyright
        owner. We are making such material available in our efforts to advance
        understanding of the civil rights movement across the globe. We believe
        this constitutes fair use of any such copyrighted material as provided
        for in section 107 of the US Copyright Law. In accordance with Title 17
        U.S.C. Section 107, the material on this site is distributed without
        profit to those who have expressed prior interest in receiving the
        included information for research and educational purposes. If you wish
        to use copyrighted material from this site for purposes of your own that
        go beyond fair use, you must obtain permission from the copyright owner.
      </p>
    </div>
  );
}

export default CommunityGuidelines;
