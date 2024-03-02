import * as React from "react"

import Layout from "../components/layout"
import Swal from 'sweetalert2'
import Seo from "../components/seo"

import "../components/contact.css"

const showMsg=()=>{
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "پیام شما فرستاده داده شد.",
    showConfirmButton: false,
    timer: 1500
  });
}

const ContactPage = () => (

  <Layout>
    <div className="contact-part">
      <h1>تماس با من </h1>
      <form dir="rtl" action="#">
        <label for="fname">نام</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="نام.."
        />

        <label for="lname">نام خانوادگی</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="نام خانوادگی.."
        />

        <label for="subject">پیام</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="پیام.."
          style={{ height: "200px" }}
        ></textarea>
        <button onClick={showMsg} type="button">فرستادن</button>
      </form>
    </div>
  </Layout>
)

export const Head = () => <Seo title="تماس با من" />

export default ContactPage
