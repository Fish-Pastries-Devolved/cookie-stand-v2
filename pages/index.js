import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <>
      <p className='text-center'>splash page</p>
      <Link href="/tableView">
        <Button>
          Table
        </Button>
      </Link>
    </>
  )
}