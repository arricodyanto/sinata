import React from 'react'

export default function GoogleButton() {
  return (
    <>
        <div className="g-signin2" data-onsuccess="onSignIn">Sign Google</div>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
    </>
  )
}
