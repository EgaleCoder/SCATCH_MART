import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { background-color: #f3f4f6; }
  50% { background-color: #e5e7eb; }
  100% { background-color: #f3f4f6; }
`;

export const SkeletonBase = styled.div`
  background-color: #f3f4f6;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const SkeletonText = styled(SkeletonBase)`
  height: 1rem;
  margin-bottom: 0.5rem;
  width: ${({ width = '100%' }) => width};
`;

export const SkeletonTitle = styled(SkeletonBase)`
  height: 2rem;
  margin-bottom: 1rem;
  width: ${({ width = '100%' }) => width};
`;

export const SkeletonButton = styled(SkeletonBase)`
  height: 3rem;
  width: ${({ width = '100%' }) => width};
  border-radius: 6px;
`;

export const SkeletonCard = () => (
  <div style={{ padding: '1rem' }}>
    <SkeletonImage />
    <SkeletonTitle width="70%" />
    <SkeletonText width="50%" />
    <SkeletonText width="30%" />
    <div style={{ marginTop: '1rem' }}>
      <SkeletonButton width="100%" />
    </div>
  </div>
);

export const ProductDetailSkeleton = () => (
  <div style={{ padding: '1rem' }}>
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
      <div style={{ flex: 1 }}>
        <SkeletonImage style={{ height: '400px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <SkeletonTitle width="70%" />
        <SkeletonText width="30%" style={{ marginBottom: '1.5rem' }} />
        <SkeletonText width="90%" />
        <SkeletonText width="80%" />
        <SkeletonText width="70%" style={{ marginBottom: '2rem' }} />
        
        <SkeletonTitle width="40%" style={{ height: '1.5rem', marginBottom: '1rem' }} />
        <SkeletonText width="60%" style={{ marginBottom: '2rem' }} />
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <SkeletonButton width="150px" />
          <SkeletonButton width="150px" />
        </div>
      </div>
    </div>
    
    <SkeletonTitle width="250px" style={{ marginBottom: '1.5rem' }} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
      {[1, 2, 3, 4].map((item) => (
        <SkeletonCard key={item} />
      ))}
    </div>
  </div>
);

export const AuthFormSkeletonLogin = () => (
  <div
    style={{
      width: '100%',
      maxWidth: '420px',
      margin: '0 auto',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid #e5e7eb',
      background: '#ffffff',
      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)'
    }}
  >
    <SkeletonTitle width="60%" style={{ marginBottom: '1.5rem' }} />
    {[1, 2, 3, 4].map((item) => (
      <div key={item} style={{ marginBottom: '1.25rem' }}>
        <SkeletonText width="40%" style={{ height: '0.9rem', marginBottom: '0.5rem' }} />
        <SkeletonText width="100%" style={{ height: '2.75rem' }} />
      </div>
    ))}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
      <SkeletonButton width="100%" style={{ height: '3rem' }} />
      <SkeletonButton width="60%" style={{ height: '2.5rem', alignSelf: 'center' }} />
    </div>
  </div>
);

export const CartSkeleton = () => (
  <div style={{ padding: '1rem' }}>
    <SkeletonTitle width="150px" style={{ marginBottom: '1.5rem' }} />
    
    {[1, 2, 3].map((item) => (
      <div key={item} style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        padding: '1.5rem',
        border: '1px solid #e5e7eb',
        borderRadius: '0.5rem',
        marginBottom: '1rem'
      }}>
        <SkeletonImage style={{ width: '120px', height: '120px' }} />
        <div style={{ flex: 1 }}>
          <SkeletonTitle width="70%" />
          <SkeletonText width="50%" style={{ marginBottom: '1rem' }} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <SkeletonButton width="100px" style={{ height: '2.5rem' }} />
            <SkeletonButton width="100px" style={{ height: '2.5rem' }} />
          </div>
        </div>
      </div>
    ))}
    
    <div style={{ 
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      marginTop: '2rem'
    }}>
      <SkeletonTitle width="150px" style={{ marginBottom: '1.5rem' }} />
      <div style={{ marginBottom: '1rem' }}>
        <SkeletonText width="100px" style={{ display: 'inline-block' }} />
        <SkeletonText width="80px" style={{ float: 'right', display: 'inline-block' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <SkeletonText width="100px" style={{ display: 'inline-block' }} />
        <SkeletonText width="80px" style={{ float: 'right', display: 'inline-block' }} />
      </div>
      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
        <SkeletonText width="80px" style={{ display: 'inline-block' }} />
        <SkeletonText width="100px" style={{ float: 'right', display: 'inline-block' }} />
      </div>
      <SkeletonButton style={{ marginTop: '1.5rem' }} />
    </div>
  </div>
);

export const AuthFormSkeletonSignup = () => (
  <div
    style={{
      width: '100%',
      maxWidth: '420px',
      margin: '0 auto',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid #e5e7eb',
      background: '#ffffff',
      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)'
    }}
  >
    <SkeletonTitle width="60%" style={{ marginBottom: '1.5rem' }} />
    {[1, 2, 3, 4].map((item) => (
      <div key={item} style={{ marginBottom: '1.25rem' }}>
        <SkeletonText width="40%" style={{ height: '0.9rem', marginBottom: '0.5rem' }} />
        <SkeletonText width="100%" style={{ height: '2.75rem' }} />
      </div>
    ))}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
      <SkeletonButton width="100%" style={{ height: '3rem' }} />
      <SkeletonButton width="60%" style={{ height: '2.5rem', alignSelf: 'center' }} />
    </div>
  </div>
);
