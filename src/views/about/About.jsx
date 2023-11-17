import React from "react";
import styles from "./about.module.css";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const About = () => {
   
  return (
    <div className={styles.About}>
      <div className={styles.MembersInfo}>
        <div className={styles.MembersInfo__row}>
          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                src="/images/elian.png"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/elian-rivera/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/elianbenjamin"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
         
            </div>
          </div>

          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                src="/images/enzo.png"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/enzo-samojedny/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/enzosamojedny"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
         
            </div>
          </div>

          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                shape="square"
                src="/images/angel.jpeg"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/angel-pe%C3%B1alver/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/AngelPenalver/"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
            </div>
          </div>

          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                shape="square"
                src="/images/marcos-senn.jpeg"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/marcossenn/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/marcos-senn"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
            </div>
          </div>
        </div>

        <div className={styles.MembersInfo__row}>
          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                shape="square"
                src="/images/mariano.png"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/mariano-croce/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/MarianoCroce"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
            </div>
          </div>

          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                shape="square"
                src="/images/marcos.jpg"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/marcos-daniel-garcia/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/Marcos-GG"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
            </div>
          </div>

          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                shape="square"
                src="/images/ramirooo.png"
              />
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/ramiro-pagella/"}
                target="_blank"
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>

              <NavLink to={"https://github.com/RamiroPagella"} target="_blank">
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
              
            </div>
          </div>

          <div className={styles.MemberInfo}>
            <Space wrap size={16}>
              <Avatar size={64} icon={<UserOutlined />} shape="square" src='/images/byron.jpeg'/>
            </Space>
            <div className={styles.iconsContainer}>
              <NavLink
                to={"https://www.linkedin.com/in/byron-chanax-64427a21b/"}
                target="_blank"
                className={styles.NavLik}
              >
                <img
                  className={styles.img}
                  src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw"
                  alt="Linkedin"
                />
              </NavLink>
              <NavLink
                to={"https://github.com/byron-fran"}
                target="_blank"
                className={styles.NavLik}
              >
                <img
                  className={styles.img2}
                  src="https://github.com/fluidicon.png"
                  alt="Git hub"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.Copyright}>
        copyright &copy; 2023 - App FullStack - Developed by Angel, Byron,
        Elián, Enzo, Mariano, Marcos senn, Marcos G and Ramiro. All rights
        reserved.{" "}
      </p>
    </div>
  );
};

export default About;
